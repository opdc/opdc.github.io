# OPDC Blog

## Jekyll Theme
### al-folio
- [source](https://github.com/alshedivat/al-folio)
- [demo](https://alshedivat.github.io/al-folio/)

### 실행파일 설치
```shell
gem install bundle
bundle install

# ImageMagick install
brew install imagemagick

# jupyter install
python3 -m venv jupyter_env
source jupyter_env/bin/activate
pip install jupyter
```

### 로컬 실행
```shell
python3 -m venv jupyter_env
source jupyter_env/bin/activate
bundle exec jekyll serve --incremental
```

### 로컬 캐시 삭제
```shell
bundle exec jekyll clean
```
