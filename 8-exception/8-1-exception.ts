// Java: Exception
// JavaScript: Error

// const array = new Array(10000000000000000000000000000000000000); // RangeError: Invalid array length

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!💩') {
    throw new Error(`file not exist! ${fileName}`); // 가능하면 Error 관련 정보 detail에 담기
  }
  return 'file contents🗒';
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = 'not exist!💩';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
