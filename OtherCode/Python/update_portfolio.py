"""
Portfolio Project Generator

Scans the OtherCode folder for project files in each language folder,
extracts metadata, and updates the mainTS.ts file with the projects.

Usage:
    python update_portfolio.py [--dry-run]
"""

import os
import re
import json
from pathlib import Path
from datetime import datetime
from typing import Optional

# Configuration
PORTFOLIO_ROOT = Path(__file__).parent.parent
OTHER_CODE_DIR = PORTFOLIO_ROOT / "OtherCode"
TYPESCRIPT_FILE = PORTFOLIO_ROOT / "Typescript" / "mainTS.ts"

# Language folder mappings
LANGUAGE_FOLDERS = {
    "c-cpp": {
        "label": "C/C++",
        "extensions": [".cpp", ".c", ".h", ".hpp"],
        "description": "Old projects fading from the top while fading out until they no longer visible."
    },
    "python": {
        "label": "Python",
        "extensions": [".py"],
        "description": "Project names fade into view then are easy to explore through the grid."
    },
    "csharp": {
        "label": "C#",
        "extensions": [".cs"],
        "description": "Currently selected language bolded and raised slightly above the other languages."
    },
    "go": {
        "label": "GO",
        "extensions": [".go"],
        "description": "New projects fading in from the bottom of the screen to the top of the view."
    }
}

# Default tags by language (can be customized)
DEFAULT_TAGS = {
    "c-cpp": ["Game systems", "Native", "Performance"],
    "python": ["Automation", "Tools", "Python"],
    "csharp": ["Editor tool", "Unity", "C#"],
    "go": ["Server", "Go", "Toolchain"]
}


def scan_folder_for_projects(language_id: str) -> list[dict]:
    """Scan a language folder for project files."""
    folder_path = OTHER_CODE_DIR / language_id.capitalize()
    
    if not folder_path.exists():
        # Try lowercase
        folder_path = OTHER_CODE_DIR / language_id.lower()
    
    if not folder_path.exists():
        print(f"  Warning: Folder not found: {folder_path}")
        return []
    
    lang_config = LANGUAGE_FOLDERS.get(language_id, {})
    extensions = lang_config.get("extensions", [])
    
    projects = []
    
    for file_path in folder_path.iterdir():
        if file_path.is_file() and file_path.suffix in extensions:
            project = extract_project_info(file_path, language_id)
            if project:
                projects.append(project)
    
    return projects


def extract_project_info(file_path: Path, language_id: str) -> Optional[dict]:
    """Extract project metadata from a file."""
    
    # Read file content
    try:
        content = file_path.read_text(encoding='utf-8', errors='ignore')
    except Exception as e:
        print(f"  Warning: Could not read {file_path.name}: {e}")
        return None
    
    # Extract title from filename
    title = file_path.stem.replace('_', ' ').replace('-', ' ').title()
    
    # Try to extract description from comments
    description = extract_description_from_content(content, language_id)
    
    # Generate link path
    link = f"../OtherCode/{language_id.capitalize()}/{file_path.name}"
    
    # Try to extract tags from comments
    tags = extract_tags_from_content(content) or DEFAULT_TAGS.get(language_id, []).copy()
    
    # Generate highlight
    highlight = generate_highlight(title, language_id)
    
    # Check if file was recently modified (within last 30 days)
    mtime = datetime.fromtimestamp(file_path.stat().st_mtime)
    days_old = (datetime.now() - mtime).days
    is_new = days_old < 30
    
    return {
        "title": title,
        "description": description,
        "link": link,
        "tags": tags[:3],  # Limit to 3 tags
        "highlight": highlight,
        "isNew": is_new
    }


def extract_description_from_content(content: str, language_id: str) -> str:
    """Extract description from file comments."""
    
    # Common comment patterns
    comment_patterns = {
        "python": r'["""](.*?)["""]|#\s*(.+)',
        "csharp": r'//\s*(.+)|/\*(.+)\*/',
        "c-cpp": r'//\s*(.+)|/\*(.+)\*/',
        "go": r'//\s*(.+)|/\*(.+)\*/'
    }
    
    pattern = comment_patterns.get(language_id, r'//\s*(.+)')
    matches = re.findall(pattern, content, re.MULTILINE | re.DOTALL)
    
    # Look for description in first few non-empty comments
    for match in matches[:5]:
        text = ' '.join(m for m in match if m).strip()
        if len(text) > 20 and len(text) < 200:
            return text
    
    # Default descriptions by language
    defaults = {
        "c-cpp": "A C++ project demonstrating game systems and performance optimization.",
        "python": "A Python tool for automation, scripting, or data processing.",
        "csharp": "A C# project for game development or tools.",
        "go": "A Go service or CLI tool for efficient processing."
    }
    
    return defaults.get(language_id, "A project in this language.")


def extract_tags_from_content(content: str) -> list[str]:
    """Extract tags from content (looks for TODO, FIXME, or custom tags)."""
    
    # Look for tag patterns like // tags: x, y, z
    tag_pattern = r'tags?:\s*([\w\s,]+)'
    match = re.search(tag_pattern, content, re.IGNORECASE)
    if match:
        tags = [t.strip() for t in match.group(1).split(',')]
        return [t for t in tags if t]
    
    # Look for common keywords
    keywords = []
    content_lower = content.lower()
    
    keyword_map = {
        "game": "Game systems",
        "unity": "Unity",
        "tool": "Tools",
        "automation": "Automation",
        "network": "Network",
        "server": "Server",
        "cli": "CLI",
        "graphics": "Graphics",
        "ai": "AI",
        "physics": "Physics",
        "render": "Graphics",
        "debug": "Debug",
        "data": "Data",
        "export": "Export",
        "simulation": "Simulation"
    }
    
    for keyword, tag in keyword_map.items():
        if keyword in content_lower and tag not in keywords:
            keywords.append(tag)
    
    return keywords[:3] if keywords else []


def generate_highlight(title: str, language_id: str) -> str:
    """Generate a highlight string based on title and language."""
    
    highlights = {
        "c-cpp": [
            "Launch a native gameplay prototype.",
            "Built for high performance.",
            "Optimized for game systems."
        ],
        "python": [
            "Fast editing and repeatable automation.",
            "Python-powered efficiency.",
            "Streamlined with Python."
        ],
        "csharp": [
            "Designed to improve workflow.",
            "Built with C# best practices.",
            "A strong foundation for growth."
        ],
        "go": [
            "Optimized for fast iteration.",
            "Lightweight and efficient.",
            "Built for small deployments."
        ]
    }
    
    import random
    lang_highlights = highlights.get(language_id, ["A project in this language."])
    return random.choice(lang_highlights)


def generate_typescript(project_groups: list[dict]) -> str:
    """Generate the TypeScript project groups array."""
    
    ts_lines = []
    ts_lines.append("const projectGroups = [")
    
    for i, group in enumerate(project_groups):
        ts_lines.append("    {")
        ts_lines.append(f'        id: "{group["id"]}",')
        ts_lines.append(f'        label: "{group["label"]}",')
        ts_lines.append(f'        description: "{group["description"]}",')
        ts_lines.append("        projects: [")
        
        for j, project in enumerate(group["projects"]):
            ts_lines.append("            {")
            ts_lines.append(f'                title: "{project["title"]}",')
            ts_lines.append(f'                description: "{project["description"]}",')
            ts_lines.append(f'                link: "{project["link"]}",')
            ts_lines.append(f'                tags: {json.dumps(project["tags"])},')
            ts_lines.append(f'                highlight: "{project["highlight"]}",')
            ts_lines.append(f'                isNew: {str(project["isNew"]).lower()},')
            ts_lines.append("            },")
        
        ts_lines.append("        ],")
        ts_lines.append("    },")
        
        if i < len(project_groups) - 1:
            ts_lines.append("")
    
    ts_lines.append("];")
    
    return "\n".join(ts_lines)


def update_typescript_file(project_groups: list[dict], dry_run: bool = False):
    """Update the mainTS.ts file with new project data."""
    
    if not TYPESCRIPT_FILE.exists():
        print(f"Error: TypeScript file not found: {TYPESCRIPT_FILE}")
        return False
    
    # Read current file
    content = TYPESCRIPT_FILE.read_text(encoding='utf-8')
    
    # Find the projectGroups section
    start_marker = "const projectGroups = ["
    end_marker = "];"
    
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print("Error: Could not find projectGroups in TypeScript file")
        return False
    
    # Find the end of the projectGroups array
    # We need to track bracket nesting
    bracket_count = 0
    end_idx = start_idx + len(start_marker)
    in_array = False
    
    for i in range(start_idx, len(content)):
        if content[i] == '[':
            bracket_count += 1
            in_array = True
        elif content[i] == ']':
            bracket_count -= 1
            if in_array and bracket_count == 0:
                end_idx = i + 1
                break
    
    # Generate new project groups section
    new_section = generate_typescript(project_groups)
    
    # Create new content
    new_content = content[:start_idx] + new_section + content[end_idx:]
    
    if dry_run:
        print("\n--- DRY RUN: No changes written ---\n")
        print(new_section)
        print("\n--- END DRY RUN ---\n")
        return True
    
    # Write updated content
    TYPESCRIPT_FILE.write_text(new_content, encoding='utf-8')
    print(f"Updated: {TYPESCRIPT_FILE}")
    return True


def main():
    import argparse
    
    parser = argparse.ArgumentParser(description="Update portfolio projects from code files")
    parser.add_argument("--dry-run", action="store_true", help="Show what would be done without making changes")
    args = parser.parse_args()
    
    print("=" * 50)
    print("Portfolio Project Generator")
    print("=" * 50)
    
    project_groups = []
    
    for lang_id, lang_config in LANGUAGE_FOLDERS.items():
        print(f"\nScanning {lang_config['label']} folder...")
        
        projects = scan_folder_for_projects(lang_id)
        
        print(f"  Found {len(projects)} project(s)")
        
        for project in projects:
            print(f"    - {project['title']}")
        
        group = {
            "id": lang_id,
            "label": lang_config["label"],
            "description": lang_config["description"],
            "projects": projects
        }
        
        project_groups.append(group)
    
    print("\n" + "=" * 50)
    print("Updating TypeScript file...")
    print("=" * 50)
    
    success = update_typescript_file(project_groups, dry_run=args.dry_run)
    
    if success:
        if args.dry_run:
            print("\nDry run complete. Run without --dry-run to apply changes.")
        else:
            print("\nDone! Projects have been updated.")
            print("\nNext steps:")
            print("  1. Rebuild TypeScript: tsc")
            print("  2. Refresh your browser to see the changes")
    else:
        print("\nFailed to update projects.")
        return 1
    
    return 0


if __name__ == "__main__":
    exit(main())