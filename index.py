import urllib.request

def downloading(url, file_path, file_name):
    full_path = file_path + file_name + '.jpg'
    urllib.request.urlretrieve(url, full_path)

url = input("URL ?")
file_name = input("Name file ?")

downloading(url, 'images/', file_name)