import os
import time
import requests

SERVER_URL = 'https://api.itmfc.ru/api/file/'

ROOT_DIR = os.getcwd()
CATALOG_REQUESTS = f'{os.getcwd()}/public/clip-to-download'
CATALOG_CLIPS = f'{os.getcwd()}/public/clips'


def download_video(media, file_name):
    url = f'{SERVER_URL}{media}'
    response = requests.get(url)
    with open(os.path.join(CATALOG_CLIPS, file_name), 'wb') as file:
        file.write(response.content)


def check_catalog(directory):
    return [name for name in os.listdir(directory)]


if __name__ == '__main__':
    print('===== START CLIP-UPLOADER =====')
    while True:
        if len(check_catalog(CATALOG_REQUESTS)):
            for clip_request in check_catalog(CATALOG_REQUESTS):
                REQUEST_PATH = os.path.join(CATALOG_REQUESTS, clip_request)
                with open(REQUEST_PATH, 'r') as file:
                    path = file.read()
                    file_name = path.split('/')[-1]
                    download_video(path, file_name)
                os.remove(os.path.join(CATALOG_REQUESTS, clip_request))
        time.sleep(1)
