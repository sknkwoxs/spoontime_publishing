export default function Authority() {
  return (
    <>
      <div>
        <div>
          <div className="mx-14 mt-[6.5rem]">
            <section className="text-center mb-[4.5rem]">
              <p className="Font20">
                회원님의 편리하고 안전한
                <br /> 스푼타임 이용을 위해
                <br />
                <span className="font-PretendardSemiBold Font20sb">
                  아래 권한의 허용
                </span>
                이 필요합니다.
              </p>
            </section>
            <section>
              <ul className="flex flex-col gap-6 mb-12">
                <li className="flex items-center gap-4">
                  <div className="p-3 border rounded-full">
                    <img
                      src="/images/svgIcons/splash_clock.svg"
                      alt="splash_clock"
                    />
                  </div>
                  <div>
                    <p className="font-PretendardSemiBold">기기 및 앱 기록</p>
                    <p className="Font12 text-GreyScale-grey02">
                      서비스 개선 및 오류 확인
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-3 border rounded-full">
                    <img
                      src="/images/svgIcons/splash_notification.svg"
                      alt="splash_notification"
                    />
                  </div>
                  <div>
                    <p className="font-PretendardSemiBold">
                      알림
                      <span className="Font12 font-Pretendard text-GreyScale-grey02">
                        &nbsp;(선택)
                      </span>
                    </p>
                    <p className="Font12 text-GreyScale-grey02">
                      푸시 알림 및 메시지 수신 안내
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-3 border rounded-full">
                    <img
                      src="/images/svgIcons/splash_camera.svg"
                      alt="splash_camera"
                    />
                  </div>
                  <div>
                    <p className="font-PretendardSemiBold">
                      사진/카메라
                      <span className="Font12 font-Pretendard text-GreyScale-grey02">
                        &nbsp;(선택)
                      </span>
                    </p>
                    <p className="Font12 text-GreyScale-grey02">
                      상담방에서 사진 업로드
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-3 border rounded-full">
                    <img
                      src="/images/svgIcons/splash_mic.svg"
                      alt="splash_mic"
                    />
                  </div>
                  <div>
                    <p className="font-PretendardSemiBold">
                      마이크
                      <span className="Font12 font-Pretendard text-GreyScale-grey02">
                        &nbsp;(선택)
                      </span>
                    </p>
                    <p className="Font12 text-GreyScale-grey02">
                      전화상담 시 음성통화 기능 제공
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-3 border rounded-full">
                    <img
                      src="/images/svgIcons/splash_location.svg"
                      alt="splash_location"
                    />
                  </div>
                  <div>
                    <p className="font-PretendardSemiBold">
                      위치
                      <span className="Font12 font-Pretendard text-GreyScale-grey02">
                        &nbsp;(선택)
                      </span>
                    </p>
                    <p className="Font12 text-GreyScale-grey02">
                      현재 위치 주변의 병원 찾기 기능
                    </p>
                  </div>
                </li>
              </ul>
              <div>
                <p className="text-center Font11">
                  *권한을 허용하지 않아도 스푼타임 이용은 가능하지만
                  <br /> 일부 서비스가 제한될 수 있습니다.
                </p>
              </div>
            </section>
          </div>
          <section className="fixed bottom-0 w-full">
            <div className="w-full">
              <button className="w-full py-3 text-GreyScale-White bg-BrandColor-green01">
                확인
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
