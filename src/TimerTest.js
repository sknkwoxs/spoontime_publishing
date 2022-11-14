export default function TimerTest() {
  const progress_bars = document.querySelectorAll(".progress");

  progress_bars.forEach((bar) => {
    setTimeout(() => {
      const { size } = bar.dataset;
      bar.style.width = `${size}%`;
    }, 1000);
  });
  return (
    <>
      <div class="progress-bar bg-[#fefefe] rounded shadow-lg m-[15px] h-[30px] w-[500px] max-w-full">
        <div
          data-size="20"
          class="progress bg-[#ad4389] rounded h-[30px] w-0 transition-all "
        ></div>
      </div>
      <div class="progress-bar bg-[#fefefe] rounded shadow-lg m-[15px] h-[30px] w-[500px] max-w-full">
        <div
          data-size="40"
          class="progress bg-[#ad4389] rounded h-[30px] w-0 transition-all "
        ></div>
      </div>
      <div class="progress-bar bg-[#fefefe] rounded shadow-lg m-[15px] h-[30px] w-[500px] max-w-full">
        <div
          data-size="60"
          class="progress bg-[#ad4389] rounded h-[30px] w-0 transition-all "
        ></div>
      </div>
      <div class="progress-bar bg-[#fefefe] rounded shadow-lg m-[15px] h-[30px] w-[500px] max-w-full">
        <div
          data-size="10"
          class="progress bg-[#ad4389] rounded h-[30px] w-0 transition-all "
        ></div>
      </div>
      <footer>
        <p>
          Created with <i class="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/06/how-to-create-a-custom-progress-bar/"
          >
            here
          </a>
        </p>
      </footer>
      Run Pen Resources
    </>
  );
}
