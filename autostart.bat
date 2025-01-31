@echo off
start syst.start-client.bat
timeout 60
start explorer kiosk.lnk
timeout 4
java -jar mouse.jar