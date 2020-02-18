FROM balenalib/raspberrypi3-python:3-build

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --allow-unauthenticated --no-install-recommends libcap2 wget procps && \
    rm -rf /var/lib/apt/lists/* 

RUN pip install --upgrade pip 
RUN pip install --upgrade setuptools
RUN pip install requests

COPY . .
RUN chmod +x runWithDapr.sh

RUN wget -q https://github.com/dapr/dapr/releases/download/v0.3.0/daprd_linux_arm.tar.gz
RUN tar -zxvf daprd_linux_arm.tar.gz

ENV PATH /app:$PATH

CMD ["/bin/bash", "runWithDapr.sh", "sensor"]