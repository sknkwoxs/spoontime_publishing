import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <section>
        <div className="flex p-4">
          <div className="absolute">
            <Link to="/MyPage">
              <img
                src="/images/svgIcons/directionsLeft.svg"
                alt="directionsLeft"
              />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <p className="Font16sb">개인정보 보호 정책</p>
          </div>
        </div>

        <article className="px-4 py-2">
          <p className="Font14">
            <span className="Font14sb">1.시작하며</span>
            <br />
            LINE주식회사(이하, ‘회사’라 함)는 회사가 제공하는 커뮤니케이션
            어플리케이션 LINE(이하, ‘LINE’이라 함) 및 LINE과 관련된 제품,
            어플리케이션, 서비스, 웹사이트 등의 모든 서비스(이들을 총칭하여,
            이하 ‘회사 서비스’라 함)를 제공함에 있어서 개인에 관한 정보(이하,
            ‘개인정보’라 함)를 수집합니다. 회사는 인터넷 컨텐츠 서비스
            제공회사의 책임에 해당하는 개인정보 보호를 가장 중요한 경영 관련
            사항 중 하나로 취급하고 있습니다. 회사는 회사가 사업을 영위하는 국가
            및 지역에 적용되는 법령과 규칙(이하 ‘적용법’이라 함)을 준수하고, 본
            개인정보처리방침(이하 ‘본 방침’이라 함)을 기초로 개인정보의 충분한
            보호를 위하여 노력할 것입니다.
            <br />
            <br />
            본 방침은 회사가 어떠한 개인정보를 수집하고, 그것을 어떻게 이용 및
            제공하고, 고객이 어떻게 자신의 개인정보를 관리할 수 있을지를
            설명하는 것입니다.본 방침은 회사가 어떠한 개인정보를 수집하고,
            그것을 어떻게 이용 및 제공하고, 고객이 어떻게 자신의 개인정보를
            관리할 수 있을지를 설명하는 것입니다.
            <br />
            본 방침의 개요를 이해하기 쉽게 설명한 ‘LINE Privacy Center’도 함께
            보시는 것을 권장합니다.
            <br />
            <br />
            <span className="Font14sb">2.본 방침의 적용 범위</span>
            <br />
            본 방침은 국가나 지역을 불문하고, 회사 서비스와 관련하여 수집하는
            모든 개인정보에 적용됩니다.
            <br />
            <br />
            <span className="Font14sb">2.a.대상 서비스 및 서비스 제공자</span>
            <br />
            <br />
            본 방침은 회사 서비스와 관련하여 수집하는 모든 개인정보에
            적용됩니다.
            <br />
            <br />
            회사는 특정 서비스에 대해서 개별 개인정보처리방침, 이용규약 또는 본
            방침에 부가적인 조항(이들을 총칭하여, 이하 ‘개별정책’이라 함)을
            적용하는 경우가 있습니다. 개별정책은 그 특정 서비스에 있어서 회사가
            어떠한 개인정보를 수집하고, 그것을 어떻게 이용하고 제공할 것인지 및
            그 특정 서비스에 적용되는 기타 정책을 설명하는 것입니다. 한편,
            개별정책과 본 방침의 내용이 모순되는 경우에는 개별정책이 우선됩니다.
            <br />
            <br />
            본 방침의 적용에 있어서는 회사가 개인정보 취급 관리자가 됩니다.
            <br />
            <br />
            <span className="Font14sb">2.b.대상국 및 지역</span>
            <br />
            <br />
            회사는 적용법에 의해 허용되는 한에서 본 방침에 따라 또한 본 방침에
            기재된 범위에 한하여 개인정보를 취급합니다.
            <br />
            <br />
            한편, 회사는 복수 언어로 본 방침을 제공하는 경우가 있으나,
            적용법에서 허가되어 있는 범위에서 일본 고객은 일본어판, 한국 고객은
            한국어판, 기타 국가 또는 지역에서는 영어판이 적용됩니다.
          </p>
        </article>
      </section>
    </>
  );
}
