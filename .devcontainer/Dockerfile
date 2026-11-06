FROM mcr.microsoft.com/devcontainers/base:resolute

# Update repos
RUN apt-get update && \
    apt-get upgrade --yes

# Become non-root user
USER vscode
