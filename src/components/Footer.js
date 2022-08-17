export default function Footer() {
  return (
    <>
      <div className="fixed w-full bottom-0 bg-GreyScale-White pb-8">
        <div className="flex pt-2 justify-between font-semibold text-[0.625rem] leading-3">
          <div className="flex flex-col mx-auto gap-1 text-center">
            <div className="mx-auto">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5642 2.76005C15.977 2.76005 15.3955 2.88009 14.8515 3.1114C14.0714 1.70894 12.6177 0.833496 11 0.833496C9.38227 0.833496 7.92861 1.70894 7.14853 3.1114C6.60737 2.88009 6.02591 2.76005 5.43581 2.76005C2.98906 2.76005 1 4.78615 1 7.27486C1 9.60546 2.74439 11.5262 4.97524 11.7633V17.7479C4.97524 18.07 5.23431 18.3335 5.55095 18.3335H16.449C16.7657 18.3335 17.0248 18.07 17.0248 17.7479V11.7633C19.2556 11.5262 21 9.60546 21 7.27486C21 4.78615 19.0109 2.76298 16.5642 2.76298V2.76005Z"
                  fill="#98B584"
                  stroke="#98B584"
                  stroke-miterlimit="10"
                />
                <path d="M4 15H18" stroke="white" />
              </svg>
            </div>
            <p className="text-BrandColor-green02">레시피</p>
          </div>
          <div className="flex flex-col mx-auto gap-1 text-center">
            <div className="mx-auto">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"
                  stroke="#2A2A2A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3333 1.6665V4.99984"
                  stroke="#2A2A2A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66675 1.6665V4.99984"
                  stroke="#2A2A2A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 8.3335H17.5"
                  stroke="#2A2A2A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>식단</p>
          </div>
          <div className="flex flex-col mx-auto gap-1 text-center">
            <div className="mx-auto">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"
                  stroke="#2A2A2A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3333 1.6665V4.99984"
                  stroke="#2A2A2A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66675 1.6665V4.99984"
                  stroke="#2A2A2A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 8.3335H17.5"
                  stroke="#2A2A2A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>꼬물이</p>
          </div>
        </div>
      </div>
    </>
  );
}
