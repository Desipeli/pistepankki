FROM --platform=$TARGETPLATFORM node AS build

WORKDIR usr/src/app

COPY ./backend .

EXPOSE 3001

RUN npm install

CMD npm run start
