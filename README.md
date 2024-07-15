# 야 너두 할 수 있어 !
- 소개<br>
  IT관련 자격증 시험 일정 조회 및 커뮤니티 사이트

# 배포 링크
- <a href="https://www.naver.com" target="_blank">you can do it !</a>

# 주요 기능
- 자격증 시험 일정 및 합격 후기 조회
- 게시판을 통해 합격자 후기 및 관련 Q&A 커뮤니티 (CRUD)
- 본인이 취득한 자격증 등록 & 다른 유저에게 공유 가능한 프로필 페이지
- 로그인 및 회원가입을 통한 인증/인가
- 별도의 관리자 페이지에서 자격증 진위 확인

# 개발 기간
2024.07.08 ~ 2024.07.14
- 서비스 기획 및 와이어 프레임 제작
- 기능 개발 및 테스트
- 배포

# 팀원 소개
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/ziiYOU/"><img src="https://avatars.githubusercontent.com/u/112477905?v=4" width="100px;" alt=""/><br /><sub><b> 팀장 : 방지영 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/mini-woong"><img src="https://avatars.githubusercontent.com/u/145542021?v=4" width="100px;" alt=""/><br /><sub><b> 팀원 : 장민영 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hyunjeongkwak"><img src="https://avatars.githubusercontent.com/u/161002090?v=4" width="100px;" alt=""/><br /><sub><b> 팀원 : 곽현정 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hyowls"><img src="https://avatars.githubusercontent.com/u/167041908?v=4" width="100px;" alt=""/><br /><sub><b> 팀원 : 김효진 </b></sub></a><br /></td>
        <td align="center"><a href="https://github.com/LEE-NS"><img src="https://avatars.githubusercontent.com/u/116232576?v=4" width="100px;" alt=""/><br /><sub><b> 팀원 : 이녕수 </b></sub></a><br /></td>
         <td align="center"><a href="https://github.com/LeeJunhyeok369"><img src="https://avatars.githubusercontent.com/u/82815583?v=4" width="100px;" alt=""/><br /><sub><b> 팀원 : 이준혁 </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

### 기능 및 페이지 담당
- 방지영 - 메인 페이지 개발
- 장민영 - 로그인 및 회원가입 페이지 개발
- 곽현정 - 자격증 상세 페이지 개발
- 김효진 - 관리자 페이지 개발
- 이녕수 - 게시판 & 게시판 상세, 작성 페이지 개발
- 이준혁 - 마이 페이지 & 프로필 페이지

### 폴더 구조

📦src<br/>
 ┣ 📂app<br/>
 ┃ ┣ 📂(root)<br/>
 ┃ ┃ ┣ 📂_components<br/>
 ┃ ┃ ┃ ┣ 📜Banner.tsx<br/>
 ┃ ┃ ┃ ┣ 📜Footer.tsx<br/>
 ┃ ┃ ┃ ┣ 📜Header.tsx<br/>
 ┃ ┃ ┃ ┣ 📜PostsPreview.tsx<br/>
 ┃ ┃ ┃ ┗ 📜postBox.tsx<br/>
 ┃ ┃ ┣ 📂adminPage<br/>
 ┃ ┃ ┃ ┣ 📂_components<br/>
 ┃ ┃ ┃ ┃ ┣ 📜Category.tsx<br/>
 ┃ ┃ ┃ ┃ ┣ 📜ConfirmState.tsx<br/>
 ┃ ┃ ┃ ┃ ┣ 📜LicenseLists.tsx<br/>
 ┃ ┃ ┃ ┃ ┣ 📜useAdminAccess.tsx<br/>
 ┃ ┃ ┃ ┃ ┗ 📜useLicenses.tsx<br/>
 ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┣ 📂board<br/>
 ┃ ┃ ┃ ┣ 📂[id]<br/>
 ┃ ┃ ┃ ┃ ┣ 📂rewrite<br/>
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┃ ┣ 📂write<br/>
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┃ ┣ 📜layout.tsx<br/>
 ┃ ┃ ┃ ┣ 📜loading.tsx<br/>
 ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┣ 📂detail<br/>
 ┃ ┃ ┃ ┣ 📂_component<br/>
 ┃ ┃ ┃ ┃ ┣ 📜ResultTable.tsx<br/>
 ┃ ┃ ┃ ┃ ┣ 📜Sticky.tsx<br/>
 ┃ ┃ ┃ ┃ ┗ 📜TestTableRow.tsx<br/>
 ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┣ 📂login<br/>
 ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┣ 📂my<br/>
 ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┣ 📂signup<br/>
 ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┣ 📜layout.tsx<br/>
 ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┣ 📂_api<br/>
 ┃ ┃ ┗ 📜posts.ts<br/>
 ┃ ┣ 📂api<br/>
 ┃ ┃ ┣ 📂licenseTest<br/>
 ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┣ 📂licenses<br/>
 ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┣ 📂licensesCheck<br/>
 ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┗ 📂posts<br/>
 ┃ ┃ ┃ ┣ 📂[id]<br/>
 ┃ ┃ ┃ ┃ ┣ 📂viewCount<br/>
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┃ ┣ 📂comment<br/>
 ┃ ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┃ ┣ 📂filteredPost<br/>
 ┃ ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┃ ┣ 📂question<br/>
 ┃ ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┃ ┣ 📂review<br/>
 ┃ ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┣ 📂auth<br/>
 ┃ ┃ ┗ 📂confirm<br/>
 ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┣ 📂components<br/>
 ┃ ┃ ┣ 📜Input.tsx<br/>
 ┃ ┃ ┗ 📜LicensesList.tsx<br/>
 ┃ ┣ 📜favicon.ico<br/>
 ┃ ┣ 📜globals.css<br/>
 ┃ ┗ 📜layout.tsx<br/>
 ┣ 📂components<br/>
 ┃ ┣ 📜BoardPagination.tsx<br/>
 ┃ ┣ 📜Comment.tsx<br/>
 ┃ ┣ 📜CommentSection.tsx<br/>
 ┃ ┣ 📜CommentWrite.tsx<br/>
 ┃ ┣ 📜PostButtons.tsx<br/>
 ┃ ┣ 📜PostsFilter.tsx<br/>
 ┃ ┣ 📜SummaryPost.tsx<br/>
 ┃ ┗ 📜ViewCount.tsx<br/>
 ┣ 📂supabase<br/>
 ┃ ┣ 📜client.ts<br/>
 ┃ ┣ 📜middleware.ts<br/>
 ┃ ┗ 📜server.ts<br/>
 ┣ 📂types<br/>
 ┃ ┣ 📜admin.ts<br/>
 ┃ ┣ 📜comment.ts<br/>
 ┃ ┣ 📜licensesType.ts<br/>
 ┃ ┣ 📜post.ts<br/>
 ┃ ┣ 📜postsType.ts<br/>
 ┃ ┣ 📜testType.ts<br/>
 ┃ ┗ 📜user.ts<br/>
 ┗ 📂zustand<br/>
 ┃ ┗ 📂store<br/>
 ┃ ┃ ┗ 📜authStore.ts<br/>
