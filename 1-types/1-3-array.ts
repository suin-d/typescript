{
  // Array
  const fruits: string[] = ['๐', '๐'];
  const scroes: Array<number> = [1, 3, 4]; // = number[]
  function printArray(fruits: readonly string[]) {
    // ์ฃผ์ด์ง ๋ฐ์ดํฐ๋ฅผ ๋ณ๊ฒฝํ  ์ ์๋ ๊ฒฝ์ฐ ํ์์ผ๋ก ๋ณด์ฅํ๋ ๋ฐฉ๋ฒ: readonly
    // readonly๋ฅผ ์์ฑํ  ๋ string[] ์ด๋ฐ ๋ฐฉ์์ผ๋ก๋ง ๊ฐ๋ฅ => ์ผ๊ด์ฑ ์๋ ์ฝ๋์์ฑ์ ์ํด 1)๋ฐฉ์ ์ฌ์ฉ
  }

  // Tuple : ์๋ก ๋ค๋ฅธ ํ์์ ํจ๊ป ๊ฐ์ง ์ ์๋ ๋ฐฐ์ด -> interface, type alias, class๋ก ๋์ฒด
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // ๊ผญ ํ์ํ ๊ฒฝ์ฐ๊ฐ ์๋๋ผ๋ฉด ํํ ์ฌ์ฉ ๊ถ์ฅํ์ง ์์
  // ๋ฐ์ดํฐ์ ์ ๊ทผํ  ๋ ์ธ๋ฑ์ค ๋ฐฉ์์ผ๋ก ์ ๊ทผํ๋ ๊ฒ ์ ๊ทผ์ฑ์ด ๋จ์ด์ง
  const [name, age] = student;
  // ๊ตฌ์กฐ๋ถํดํ ๋น(Destructuring)์ผ๋ก ์ ๊ทผํ๋ ๋ฐฉ๋ฒ๋ ์์ง๋ง, ์ฌ์ ํ ๋ฐ์ดํฐ๊ฐ ์ ํด์ง ๊ณณ์ด ์๋๋ผ ์ฌ์ฉํ๋ ๊ณณ์์ ์์๋ก ๊ฒฐ์ ํ๊ณ  ์จ์ผํ๋ ๋จ์  ์กด์ฌ
}
