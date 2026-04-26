"""Simple Python script for generating new portfolio project entries."""

projects = [
    {"title": "AI gameplay prototype", "language": "Python", "description": "A prototype tool that uses Python to simulate enemy behavior."}
]

if __name__ == "__main__":
    print("Portfolio project generator")
    for project in projects:
        print(f"- {project['title']}: {project['description']}")
