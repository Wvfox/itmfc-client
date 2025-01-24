@echo off
git pull
MKDIR "%cd%\public\clips" 
MKDIR "%cd%\public\clip-to-download"
start syst.prepare-react.bat
start syst.prepare-python.bat