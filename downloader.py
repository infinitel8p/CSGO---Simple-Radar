import requests

# URL of the file to download
url = "https://files.readtldr.com/sr/Color{}Pat{}Buy{}Spec{}/Simple%20Radar.zip"


# Loop through all possible combinations of variables
for var1 in [0, 1]:
    for var2 in [0, 1]:
        for var3 in [0, 1]:
            for var4 in [0, 1]:
                # Generate the URL with the current variables
                download_url = url.format(var1, var2, var3, var4)

                # Generate a unique filename for the downloaded file
                filename = "Simple Radar"

                if bool(var1):
                    # Colormode (False = Light)
                    filename += " Col"
                if bool(var2):
                    # Callouts (False = Off)
                    filename += " Cal"
                if bool(var3):
                    # Buyzones (False = Off)
                    filename += " Buy"
                if bool(var4):
                    # Elevations (False = Off)
                    filename += " Ele"

                filename += ".zip"

                # Download the file and save it with the unique filename
                response = requests.get(download_url)
                with open(filename, 'wb') as f:
                    f.write(response.content)
                print(f"Downloaded {filename}")
