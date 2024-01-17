import os
import requests

# Construct the full file path
xml_file_path = os.path.join("C:\\Users\\Yogha\\OneDrive\\Documents\\XML", "test.xml")
url = "file://" + xml_file_path  # Use "file://" protocol for local files

response = requests.get(url)

if response.status_code == 200:
    xml_content = response.text
    # Process the XML content as needed
else:
    print(f"Failed to retrieve XML file. Status code: {response.status_code}")
