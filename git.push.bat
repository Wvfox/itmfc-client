@echo off
git config --global user.email "Wvfox597@gmail.com"
git add .

@echo.
set /p name_commit=Commit:
@echo. 
git commit -m "%name_commit%"

@echo.
git push

@echo.
pause