# OPDC Blog

## Jekyll Theme
### al-folio
- [source](https://github.com/alshedivat/al-folio)
- [demo](https://alshedivat.github.io/al-folio/)

### rbenv와 ruby-build를 설치
```shell
brew update
brew install rbenv ruby-build

rbenv install -l
rbenv install 3.4.3

# 글로벌로 사용할 Ruby 버전을 설정
rbenv global 3.4.3

# 쉘 설정 파일(.zshrc 또는 .bashrc)에 rbenv 초기화 코드를 추가하고 적용
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc
```

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
