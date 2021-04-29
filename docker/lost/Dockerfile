ARG base_image=lost-base:latest
FROM $base_image
# Add Code
COPY ./docker/lost/entrypoint.sh /
COPY ./docker/lost/pytest.sh /
COPY ./docker/lost/nginx/ /code/docker/lost/nginx
COPY ./backend/ /code/backend
COPY ./frontend/ /code/frontend
COPY ./docs/ /code/docs
RUN echo "export PATH=$PATH:/code/backend/lost/cli" >> ~/.bashrc
RUN echo "conda activate lost" >> ~/.bashrc