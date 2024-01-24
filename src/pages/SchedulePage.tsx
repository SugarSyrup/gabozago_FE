import React from "react";
import PageTemplate from "../components/common/PageTemplate";
import useSearchInput from "../hooks/useSearchInput";

function SchedulePage() {
    const [, SearchInput] = useSearchInput({});
    return (
        <PageTemplate nav={true} header={false}>
            여행 일정 페이지
            <SearchInput />
        </PageTemplate>
    );
}

export default SchedulePage;
