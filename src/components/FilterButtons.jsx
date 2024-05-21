// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
function FilterButtons(
  /* 필요한 props를 여기에 전달하세요 */ {
    initialStudents,
    setFilteredStudents,
  }
) {
  const filterByAge = (minAge) => {
    // setFilteredStudents((prev) =>
    //   prev.filter((student) => student.age >= minAge)
    // );
    setFilteredStudents(() =>
      initialStudents.filter((student) => student.age >= minAge)
    );
  };

  // TODO: filterByGrade 함수를 작성하세요. 이 함수는 특정 학점을 매개변수로 받아 해당 학점의 학생들로 필터링해야 합니다.
  const filterByGrade = (grade) => {
    setFilteredStudents(() =>
      initialStudents.filter((student) => student.grade === grade)
    );
  };

  // TODO: resetFilter 함수를 작성하세요. 이 함수는 필터를 초기화하여 모든 학생들을 표시해야 합니다.
  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      {/* 여기에 필터링 버튼들을 완성하세요. */}
      <button onClick={() => filterByAge(18)}>18세 이상</button>
      <button onClick={() => filterByGrade("A")}>A등급</button>
      <button onClick={() => resetFilter()}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
