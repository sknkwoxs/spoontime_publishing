export default function IngredientList() {
  return (
    <>
      <article className="mb-6">
        <div>
          <div className="flex gap-4 py-4 border-b">
            <div className="flex items-center gap-4">
              <button>
                <img src="/images/svgIcons/heartFill.svg" alt="heartFill" />
              </button>
              <button className="flex gap-2">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10"
                    src="/images/ingredients/cabbage.svg"
                    alt="cabbage"
                  />
                </div>
                <div className="text-left">
                  <p className="Font14sb">양배추</p>
                  <p className="Font12">야채류</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 py-4 border-b">
            <div className="flex items-center gap-4">
              <button>
                <img src="/images/svgIcons/heartFill.svg" alt="heartFill" />
              </button>
              <button className="flex gap-2">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10"
                    src="/images/ingredients/broccoli.svg"
                    alt="broccoli"
                  />
                </div>
                <div className="text-left">
                  <p className="Font14sb">브로콜리</p>
                  <p className="Font12">야채류</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 py-4 border-b">
            <div className="flex items-center gap-4">
              <button>
                <img src="/images/svgIcons/heartFill.svg" alt="heartFill" />
              </button>
              <button className="flex gap-2">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10"
                    src="/images/ingredients/carrot.svg"
                    alt="carrot"
                  />
                </div>
                <div className="text-left">
                  <p className="Font14sb">당근</p>
                  <p className="Font12">야채류</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-4 py-4 border-b">
            <div className="flex items-center gap-4">
              <button>
                <img src="/images/svgIcons/heartFill.svg" alt="heartFill" />
              </button>
              <button className="flex gap-2">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10"
                    src="/images/ingredients/shrimp.svg"
                    alt="shrimp"
                  />
                </div>
                <div className="text-left">
                  <p className="Font14sb">새우</p>
                  <p className="Font12">야채류</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
