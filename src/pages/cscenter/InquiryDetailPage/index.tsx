import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import Typography from "../../../components/common/Typography";
import { get } from "../../../utils/api";

import * as S from "./style";

interface TData {
	id: number;
	title: string;
	createdAt: string;
	status: "답변대기" | "답변완료";
	content: string;
	imageURL: string[];
	
	answer: {
		title: string;
		createdAt: string;
		content: string;
	} | null;
}

function InquiryDetailPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState<TData>();

    useEffect(() => {
        get<TData>(`/settings/support/help/ask/${id}`)
            .then((response) => {
                setData(response.data);
            });
    }, [])

    return (
        <PageTemplate nav={false} header={<PageHeader><Typography.Title size="lg">내 문의 내역</Typography.Title></PageHeader>}>
            <S.Container>
                <S.TextContainer>
                    <Typography.Title size="md">{data?.title}</Typography.Title>
                    <S.DateSpan>{data?.createdAt.replace("-", ". ").replace("-", ". ")}</S.DateSpan>
                </S.TextContainer>
                <S.StatusSpan
                  type={data?.status === "답변대기" ? "active" : "inactive"}
                >
                  {data?.status}
                </S.StatusSpan>
            </S.Container>
            <S.Contents>
                <Typography.Body size="md" noOfLine={100}>{data?.content}</Typography.Body>
            </S.Contents>
            {
                data?.imageURL.length !== 0 && 
                <S.ImgContainer>
                    <Typography.Title size="md">첨부파일</Typography.Title>
                    <S.ImgList>
                        {data?.imageURL.map((url, index) => (
                            <img src={url} alt="img" key={index} />
                        ))}
                    </S.ImgList>
                </S.ImgContainer>
            }
            {
                data?.answer && 
                <>
                    <S.AnswerContainer>
                        <S.TextContainer>
                            <Typography.Title size="md">{data?.answer?.title}</Typography.Title>
                            <S.DateSpan>{data?.answer?.createdAt.replace("-", ". ").replace("-", ". ")}</S.DateSpan>
                        </S.TextContainer>
                    </S.AnswerContainer>
                    <S.Contents>
                        <Typography.Body size="md" noOfLine={100}>{data?.answer?.content}</Typography.Body>
                    </S.Contents>
                </>
            }
        </PageTemplate>
    );
}

export default InquiryDetailPage;
