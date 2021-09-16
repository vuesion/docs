# 최신버전 유지하기

## 최근 변경사항 불러오기

Vuesion을 최신 버전으로 유지하려면, 아래 절차를 따르세요.

- VCS를 사용중인지 확인합니다. (Github, Gitlab, Bitbucket 등)
- 로컬 수정사항을 제거합니다.
- 새로운 브랜치를 생성합니다.
- `npm run update` 명령어를 실행합니다.

해당 업데이트 스크립트는 현재 로컬에 저장된 Vuesion과 `vuesion/vuesion:master`를 비교하여, 변경된 부분을 적용합니다.

해당 명령어는 기본적으로 `Vuesion/vuesion:master` 로 리베이스 하는 것과 동일한 작동을 합니다.
그러나, 보통의 개발환경에서는 작업중인 앱에 Vuesion을 연결해두지 않기 때문에 위와 같은 방법을 사용해야 합니다.

## 로컬 수정사항과 병합하기

이제 IDE 등에서 로컬 변경사항을 확인할 수 있습니다.

- 변경된 모든 파일을 검토하고 변경사항을 적절하게 처리합니다.
- `npm run test && npm run lint` 를 실행하여 프로젝트에 대한 테스트와 린터를 실행합니다.
- `npm run dev` 를 통해 어플리케이션을 실행합니다.

모두 문제없이 작동했다면, 커밋하여도 문제가 없습니다.
그렇지 않다면, 작업중인 프로젝트와 [CHANGELOG](https://github.com/vuesion/vuesion/blob/master/CHANGELOG.md)를 비교하여 수동으로 업데이트 해야 합니다.
