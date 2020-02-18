FROM balenalib/raspberrypi3-node:12-latest-build

WORKDIR /app/

COPY . .

RUN npm install --production

RUN chmod +x runWithDapr.sh

RUN apt-get update \
    && apt-get install -y procps \
    && rm -rf /var/lib/apt/lists/*

RUN wget -q https://github.com/dapr/dapr/releases/download/v0.3.0/daprd_linux_arm.tar.gz
RUN tar -zxvf daprd_linux_arm.tar.gz

ENV PATH /app:$PATH

CMD ["/bin/bash", "runWithDapr.sh", "storage", "3000", "3502", "5002"]