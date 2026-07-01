@REM ----------------------------------------------------------------------------
@REM Maven Start Up Batch script
@REM ----------------------------------------------------------------------------
@echo off
set MAVEN_WRAPPER_JAR="%MAVEN_USER_HOME%\.m2\wrapper\dists\maven-wrapper.jar"
if not exist %MAVEN_WRAPPER_JAR% (
    set MAVEN_WRAPPER_JAR="%USERPROFILE%\.m2\wrapper\dists\maven-wrapper.jar"
)

set DOWNLOAD_URL=https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.2.0/maven-wrapper-3.2.0.jar
set JAVA_EXE=java.exe

for /F "usebackq tokens=1,2 delims==" %%a in ("%~dp0.mvn\wrapper\maven-wrapper.properties") do (
    if "%%a"=="distributionUrl" set DISTRIBUTION_URL=%%b
)

set WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain
%JAVA_EXE% -jar "%~dp0.mvn\wrapper\maven-wrapper.jar" %DISTRIBUTION_URL% %*
