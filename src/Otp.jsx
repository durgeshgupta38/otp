import React, { useState, useEffect, useRef } from "react";
const INITIAL_COUNT = 120;
const twoDigits = (num) => String(num).padStart(2, "0");
function SwitchToggle() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  const handleStart = async () => {
    setStatus(STATUS.STARTED);
    setSecondsRemaining(INITIAL_COUNT);
  };
  const STATUS = {
    STARTED: "STARTED",
    STOPPED: (
      <b>
        <a
          type="button"
          onClick={handleStart}
          class="text-danger"
          style={{ marginLeft: "160px" }}
        >
          Resend OTP
        </a>
      </b>
    ),
  };

  const [status, setStatus] = useState(STATUS.STOPPED);
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="justify-content-center align-items-center h-100 mb-5">
          <div>
            <h4 className="text-success">OTP verification </h4>
            <h5 className="text-daanger ml-4">OTP </h5>
          </div>
          <div className=" row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-6">
              <div
                class="card rounded-3 text-black"
                style={{ boxShadow: "rgb(0 0 0 /20%)   8px   9px 8px 15px" }}
              >
                <div className="row g-0">
                  <div className="col-lg-12">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="mr-4">
                        <h4
                          className="mt-1 mb-5 mr-5"
                          style={{ color: "green" }}
                        >
                          verify otp for login
                        </h4>
                      </div>
                      <form>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Exapmle22"
                            placeholder="enter otp"
                            class="form"
                          />
                        </div>
                        <div class="d-flex justify-content-center align-items-center pb-4">
                          <button class="btn btn-outline-danger">Login</button>
                        </div>
                      </form>
                      {status == STATUS.STARTED ? (
                        <div style={{ marginLeft: "100px" }}>
                          <b className="text-success">Resend OTP in</b>
                          <b className="ml-2 text-danger">
                            {twoDigits(minutesToDisplay)}:
                            {twoDigits(secondsToDisplay)}
                          </b>
                        </div>
                      ) : (
                        status
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SwitchToggle;
