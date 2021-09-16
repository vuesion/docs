# 어플리케이션 실행하기

정상적으로 작동하는지 테스트 하려면 `npm run dev` 를 사용하세요.

해당 명령어는 [http://localhost:3000](http://localhost:3000) 를 열어, Nuxt.js 로딩 스크린을 출력합니다.

## 개발 모드와 핫 리로딩

위 명령어를 사용하면 어플리케이션은 개발 모드에서 작동됩니다.

개발 모드라 함은 webpack이 프로젝트의 수정사항, 특히 `./src` 경로 내 파일들의 수정을 확인하고 핫리로드 하여, 개발시 일일히 새로고침하거나 재시작할 필요가 없습니다.

::: tip 국제화(i18n)
`./i18n` 경로에 포함된 파일은 핫리로드 되지 않습니다. 국제화 적용을 위해서는 브라우저를 새로고침 해야합니다.
:::

::: tip Storybook
Vuesion은 컴포넌트 개발을 위해 Storybook 활용을 권장합니다. 기존의 방식보다 더 쉽고 빠르게 컴포넌트 스타일링을 할 수 있습니다.

`npm run storybook:dev` 를 통해 스토리북을 실행할 수 있습니다.
:::

## 웹서버 포트 변경하기

어플리케이션은 기본적으로 `3000` 포트에서 작동합니다. `PORT` 환경변수를 수정하여 포트를 변경할 수 있습니다.
개발 모드를 위해 `npm run dev -- --port 8080` 를 사용하거나, 프로덕션을 위해 `PORT=8080 npm start` 를 사용할 수 있습니다.

## Docker 로 실행하기

Vuesion 어플리케이션은 Docker 으로도 실행할 수 있습니다.

이미지 빌드를 위해 아래 코드를 실행하세요.

```bash
npm run ci && docker build -t "vuesion:latest" .
```

빌드가 완료되면, Docker 컨테이너를 실행할 수 있습니다.

```bash
docker run -it --name vuesion -p 3001:3000 vuesion:latest
```

아래 메시지가 출력되었다면, 정상적으로 Docker 설정이 완료된 것입니다.

```bash
   ╭────────────────────────────────────────╮
   │                                        │
   │   Nuxt @ v2.15.2                       │
   │                                        │
   │   ▸ Environment: production            │
   │   ▸ Rendering:   server-side           │
   │   ▸ Target:      server                │
   │                                        │
   │   Memory usage: 123 MB (RSS: 181 MB)   │
   │                                        │
   │   Listening: http://172.17.0.2:3000/   │
   │                                        │
   ╰────────────────────────────────────────╯
```

Docker 이미지의 경우 3031 포트가 기본 포트로 지정되어 있기 때문에, 로컬 서버와 도커를 병행하여 사용할 수 있습니다.

이후의 절차는 예상하신대로 [http://localhost:3001](http://localhost:3001) 에 접속하여 작업을 시작하는 것입니다.
