import os
import shutil
import time
import requests

SERVER_URL = 'https://api.itmfc.ru/api/file/'

ROOT_DIR = os.getcwd()
CATALOG_REQUESTS = f'{os.getcwd()}/public/clip-to-download'
CATALOG_CLIPS = f'{os.getcwd()}/public/clips'
CATALOG_STATUSES = f'{os.getcwd()}/pages/api/clip'


def download_video(media, video_name):
    url = f'{SERVER_URL}{media}'
    response = requests.get(url)
    with open(os.path.join(CATALOG_CLIPS, video_name), 'wb') as file:
        print(f'Create video: {video_name}')
        file.write(response.content)


def check_catalog(directory):
    return [name for name in os.listdir(directory)]


def copy_status(clip_id):
    print(f'Create status: {clip_id}')
    shutil.copy(
        os.path.join(CATALOG_STATUSES, 'layout.js'),
        os.path.join(CATALOG_STATUSES, f'{clip_id}.js')
    )


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
                    copy_status(clip_request.split('.')[0])
                print(f'Delete request: {clip_request}')
                os.remove(os.path.join(CATALOG_REQUESTS, clip_request))
                print()
        time.sleep(1)
