from PIL import Image
file_name = input()
im = Image.open(file_name)
im.load()
if file_name[len(file_name)-5] == '.':
    file_name = file_name[:len(file_name) - 5]
if file_name[len(file_name)-4] == '.':
    file_name = file_name[:len(file_name) - 4]
im.save(file_name + ".png")
