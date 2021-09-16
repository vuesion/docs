# 테스트 진행하기

개발 모드에서 어플리케이션을 제작하고 계시겠지만, 모든 컴포넌트가 정상적으로 작동한다고 보장할 수는 없습니다.

모든 기능, 컴포넌트, 서비스 등이 의도한대로 작동하는지 확인하려면.
`npm run test` 명령어를 실행하여 테스트 할 수 있습니다.

명령어를 실행하면 아래와 같은 화면이 출력됩니다.

```bash
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |   

...

Test Suites: 63 passed, 63 total
Tests:       255 passed, 255 total
Snapshots:   0 total
Time:        9.633 s
Ran all test suites.

Process finished with exit code 0
```

위 화면은 성공적으로 테스트 되었음을 알려줍니다.
일부 테스트가 실패할 경우, 해당 실패와 관련된 경고가 표시됩니다.

`npm test` 명령어는 모든 커밋 전에 실행됩니다.
해당 명령어를 사용하면 변경사항으로 인해 어플리케이션이 중단되지 않습니다.

::: tip Jest 설정하기
기본적으로 임계값은 100% 로 적용되어 있습니다.

임계값 등의 설정을 변경하려면 `./jest.config.js` 파일을 수정하세요.

```js
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    },
```

:::
