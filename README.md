# OPDC Blog

## Jekyll Theme
### al-folio
- https://github.com/alshedivat/al-folio

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
bundle exec jekyll serve --incremental --trace
```
### 로컬 캐시 삭제
```shell
bundle exec jekyll clean
```

[NbConvertApp] Converting notebook /var/folders/1m/8g5_hh096g11n3sc0hnxrbl00000gn/T/jekyll-jupyter-notebook20241230-52864-smjj9j.ipynb to html
Terser Exception: Private field must be used in an enclosing class

jupyter nbconvert --to html --execute --allow-errors your-notebook.ipynb
