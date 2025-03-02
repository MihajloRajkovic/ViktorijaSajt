import os
from PIL import Image

def change_extension_and_format_images(directory):
    # Kreiraj novi folder za obrađene slike
    new_folder = os.path.join(directory, 'Obradjene_slike')
    if not os.path.exists(new_folder):
        os.makedirs(new_folder)

    # Prolazi kroz sve fajlove u direktorijumu
    for filename in os.listdir(directory):
        # Proverava da li je fajl sa ekstenzijom .JPG ili .JPEG
        if filename.lower().endswith(('.jpg', '.jpeg')):
            file_path = os.path.join(directory, filename)
            
            try:
                # Otvara sliku
                with Image.open(file_path) as img:
                    # Formatira i optimizuje sliku (možete dodati dodatne opcije za smanjenje veličine)
                    img = img.convert('RGB')  # Može biti korisno za osiguranje da je slika u RGB formatu
                    new_filename = filename.lower()  # Menja ekstenziju u mala slova
                    new_file_path = os.path.join(new_folder, new_filename)
                    
                    # Spremi sliku u novi folder
                    img.save(new_file_path, quality=95)  # kvalitet 95 je dobar za balans između kvaliteta i veličine fajla
                    print(f"Slika '{filename}' je sačuvana u novi folder kao '{new_filename}'")

            except Exception as e:
                print(f"Greška pri otvaranju slike {filename}: {e}")

# Unesi putanju do svog foldera (ovde koristimo tvoju putanju direktno)
folder_path = r'D:\New folder\viktorija\galerija'  # Tvoja putanja do foldera sa slikama
change_extension_and_format_images(folder_path)
