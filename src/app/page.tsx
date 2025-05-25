import { Navbar } from "@/components/Navbar";
import { PhoneDisplay } from "@/components/PhoneDisplay";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <div className="w-full flex flex-col  p-0">
      <div className="mx-28">
        <Navbar />
        <div>
          <Row align={"stretch"} gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <PhoneDisplay />
            </Col>
            <Col xs={24} lg={12}>
              <div className="bg-white rounded-lg h-full flex flex-col p-14">
                <div>
                  <p>Customize your links</p>
                </div>

              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
