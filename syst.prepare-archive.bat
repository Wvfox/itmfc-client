@echo off
RMDIR /S /Q .\compilation
MKDIR .\compilation
MKDIR .\compilation\.next
MKDIR .\compilation\public
XCOPY .\.next .\compilation\.next /e /h /k /q /r /c /y
XCOPY .\public .\compilation\public /e /h /k /q /r /c /y
COPY /Y .\package.json .\compilation
COPY /Y .\package-lock.json .\compilation
pause