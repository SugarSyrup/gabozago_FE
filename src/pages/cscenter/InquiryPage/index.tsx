import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { useEffect, useRef, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import Button from "../../../components/common/Button";
import { modalState } from "../../../recoil/modalState";
import BottomChevronIcon from "../../../assets/icons/chevron_bottom_small.svg?react";
import ImageAddIcon from "../../../assets/icons/image_add.svg?react";
import { post } from "../../../utils/api";

interface Form {
  type: string;
  email: string;
  title: string;
  contents: string;
  files: File[];
}

function InquiryPage() {
  const username = "최민석";
  const activeInquiryTypes = ["01", "03", "04", "05", "06", "07"];
  const inquiryTypeMap = new Map([
    ["01", "계정 설정"],
    ["02", "이벤트/쿠폰/적립금"],
    ["03", "서비스 이용"],
    ["04", "서비스 오류 제보"],
    ["05", "불편 신고"],
    ["06", "서비스 개선 사안"],
    ["07", "기타 문의"],
  ]);
  const submitRef = useRef<HTMLButtonElement>(null);
  const setModal = useSetRecoilState(modalState);
  const [form, setForm] = useState<Form>({
    type: "00",
    email: "",
    title: "",
    contents: "",
    files: [],
  });
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const submitForm = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      // @todo: 첨부파일 "파일 vs 이미지" api 변경점 논의 후, 이미지만 받을 경우 image 업로드 별도 처리
      post<Form>(`${import.meta.env.VITE_BASE_URL}settings/support/help/ask`);
    }
  };

  useEffect(() => {
    setModal({
      isOpend: false,
      title: "문의 유형 선택하기",
      contents: (
        <S.SelectOptionList>
          {activeInquiryTypes.map((item) => (
            <li
              onClick={() => {
                setForm((prev) => ({ ...prev, type: item }));
                setModal((prev) => ({ ...prev, isOpend: false }));
              }}
            >
              {inquiryTypeMap.get(item)}
            </li>
          ))}
        </S.SelectOptionList>
      ),
    });
  }, []);

  return (
    <PageTemplate
      nav={
        <S.ButtonContainer>
          <Button
            active={true}
            size="lg"
            type="normal"
            width="100%"
            onClick={() => {
              if (submitRef.current) {
                submitRef.current.click();
              }
            }}
          >
            제출하기
          </Button>
        </S.ButtonContainer>
      }
      header={<PageHeader>서비스 문의하기</PageHeader>}
    >
      <S.Form>
        <S.InputContainer>
          <div>
            <label htmlFor="">
              <S.TitleHeading>문의하려는 내용이 무엇인가요?</S.TitleHeading>
            </label>
            <S.DescSpan>
              서비스 이용 중 제안사항은 ‘서비스 개선 제안'으로 선택해주세요:)
            </S.DescSpan>
          </div>
          <S.SelectButton
            onClick={(e) => {
              e.preventDefault();
              setModal((prev) => ({ ...prev, isOpend: true }));
            }}
          >
            {form.type === "00"
              ? "문의 유형 선택하기"
              : inquiryTypeMap.get(form.type)}
            <BottomChevronIcon />
          </S.SelectButton>
        </S.InputContainer>
        <S.InputContainer>
          <S.TitleHeading>문의자</S.TitleHeading>
          <S.Input
            type="text"
            disabled={true}
            required={true}
            value={username}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.TitleHeading>이메일</S.TitleHeading>
          <S.Input
            type="email"
            required={true}
            value={form.email}
            placeholder="이메일을 입력하세요."
            onChange={(e) => {
              setForm((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.TitleHeading>문의 내용</S.TitleHeading>
          <S.Input
            type="text"
            required={true}
            value={form.title}
            placeholder="제목을 입력하세요."
            onChange={(e) => {
              setForm((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
          <S.TextArea
            maxLength={2000}
            required={true}
            value={form.contents}
            placeholder="내용을 입력하세요.(최대 2000자)"
            onChange={(e) => {
              setForm((prev) => ({ ...prev, contents: e.target.value }));
            }}
          />
          <S.TextCountParagraph>
            {form.contents.length}/2000
          </S.TextCountParagraph>
        </S.InputContainer>
        <S.InputContainer>
          <S.TitleHeading>첨부파일</S.TitleHeading>
          <S.FileUploaderContainer>
            <S.FileLabel htmlFor="files">
              <ImageAddIcon />
              <span>{form.files.length} / 5</span>
            </S.FileLabel>
            <S.FileList>
              {previewImages.map((item, targetIndex) => (
                <li>
                  <S.FileBox
                    image={item}
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        files: prev.files.filter(
                          (item, index) => index !== targetIndex
                        ),
                      }));
                      setPreviewImages((prev) =>
                        prev.filter((item, index) => index !== targetIndex)
                      );
                    }}
                  />
                </li>
              ))}
            </S.FileList>
          </S.FileUploaderContainer>
          <input
            type="file"
            accept=".webp,.jpeg,.jpg,.png,.gif"
            id="files"
            required={false}
            multiple
            onChange={(e) => {
              const maxSize = 10 * 1024 * 1024; // 10MB 사이즈 제항
              const newFileArray = Array.from(e.currentTarget.files || []);
              const fileArray = form.files.concat(newFileArray);

              /* ==== Validation 시작 ==== */
              // 최대 개수를 초과할 수 없음
              if (fileArray.length > 5) {
                return alert("사진 첨부는 최대 5개까지 가능합니다.");
              }
              // 이미지 크기 제한 체크
              newFileArray.map(({ name, size }) => {
                if (size > maxSize) {
                  return alert(
                    `10MB 이내 이미지 파일만 첨부할 수 있습니다. \nfile: ${name}`
                  );
                }
              });
              /* ==== Validation 끝 ==== */

              setForm((prev) => ({
                ...prev,
                files: fileArray,
              }));

              // 미리보기 이미지 url 생성해 PreviewImages에 저장
              setPreviewImages([]);
              fileArray.map((item) => {
                const fileRead = new FileReader();
                fileRead.onload = () => {
                  setPreviewImages((prev) => [
                    ...prev,
                    String(fileRead.result),
                  ]);
                };
                fileRead.readAsDataURL(item);
              });
            }}
            style={{ display: "none" }}
          />
          <S.DescSpan>
            10MB 이내 이미지 파일(jpg, png, gif)을 최대 5개까지 첨부 가능합니다.
          </S.DescSpan>
        </S.InputContainer>
        <button
          type="submit"
          ref={submitRef}
          style={{ display: "none" }}
          onClick={(e) => {
            e.preventDefault();

            if (form.type === "00") {
              alert("문의 유형을 선택해주세요.");
              return;
            }
            // @todo: 추가로 밸리데이션 체크 필요
            submitForm();
          }}
        >
          제출하기
        </button>
      </S.Form>
    </PageTemplate>
  );
}

export default InquiryPage;
