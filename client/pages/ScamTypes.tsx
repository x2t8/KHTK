import { ArrowLeft, Phone, MessageSquare, Mail, CreditCard, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export default function ScamTypes() {
  const scamDetails = [
    {
      id: "phone",
      icon: Phone,
      title: "Lừa đảo qua điện thoại",
      danger: "Cực kỳ nguy hiểm",
      color: "text-red-600 bg-red-100",
      description: "Kẻ lừa đảo gọi điện giả danh cơ quan công an, ngân hàng, tòa án để lừa thông tin cá nhân và tiền bạc.",
      techniques: [
        "Giả danh công an, kiểm sát viện",
        "Thông báo tài khoản bị khóa",
        "Yêu cầu chuyển tiền 'bảo toàn tài sản'",
        "Đe dọa bắt giữ nếu không hợp tác"
      ],
      redFlags: [
        "Yêu cầu cung cấp mã OTP",
        "Đe dọa, gây áp lực tâm lý",
        "Không cho thời gian suy nghĩ",
        "Yêu cầu chuyển tiền ngay lập tức"
      ],
      protection: [
        "Cúp máy ngay khi nghi ngờ",
        "Gọi lại số hotline chính thức",
        "Không cung cấp thông tin cá nhân",
        "Tham khảo ý kiến người thân"
      ]
    },
    {
      id: "sms",
      icon: MessageSquare,
      title: "Lừa đảo qua SMS",
      danger: "Nguy hiểm cao",
      color: "text-orange-600 bg-orange-100",
      description: "Tin nhắn giả mạo thông báo trúng thưởng, khuyến mãi hoặc cảnh báo tài khoản để lừa click link độc hại.",
      techniques: [
        "Thông báo trúng thưởng khủng",
        "Khuyến mãi hấp dẫn từ thương hiệu nổi tiếng",
        "Cảnh báo tài khoản bị hack",
        "Link rút gọn che giấu đích đến"
      ],
      redFlags: [
        "Số điện thoại lạ, không rõ nguồn gốc",
        "Yêu cầu click link ngay lập tức",
        "Thông tin quá hấp dẫn, không hợp lý",
        "Lỗi chính tả, ngữ pháp"
      ],
      protection: [
        "Không click vào link lạ",
        "Kiểm tra tên miền website",
        "Xác minh qua kênh chính thức",
        "Sử dụng app diệt virus"
      ]
    },
    {
      id: "email",
      icon: Mail,
      title: "Lừa đảo qua Email",
      danger: "Nguy hiểm cao",
      color: "text-yellow-600 bg-yellow-100",
      description: "Email phishing giả mạo ngân hàng, dịch vụ online để đánh cắp thông tin đăng nhập và tài khoản.",
      techniques: [
        "Giả mạo email ngân hàng",
        "Thông báo cập nhật bảo mật",
        "Hóa đơn giả từ dịch vụ online",
        "Đính kèm file độc hại"
      ],
      redFlags: [
        "Email từ địa chỉ lạ",
        "Yêu cầu cập nhật thông tin khẩn cấp",
        "Logo, thiết kế không chính thức",
        "File đính kèm đáng ngờ"
      ],
      protection: [
        "Kiểm tra địa chỉ email gửi",
        "Đăng nhập trực tiếp vào website",
        "Không tải file đính kèm lạ",
        "Báo cáo email spam"
      ]
    },
    {
      id: "financial",
      icon: CreditCard,
      title: "Lừa đảo tài chính",
      danger: "Cực kỳ nguy hiểm",
      color: "text-purple-600 bg-purple-100",
      description: "Các hình thức đầu tư ma, sàn forex giả, vay tiền online với lãi suất hấp dẫn để chiếm đoạt tài sản.",
      techniques: [
        "Sàn forex, crypto giả",
        "Đầu tư đa cấp online",
        "Vay tiền lãi suất 0%",
        "HYIP - lãi suất siêu cao"
      ],
      redFlags: [
        "Lãi suất quá cao, không hợp lý",
        "Không có giấy phép hoạt động",
        "Yêu cầu nạp tiền trước",
        "Không thể rút tiền"
      ],
      protection: [
        "Kiểm tra giấy phép kinh doanh",
        "Tìm hiểu kỹ trước khi đầu tư",
        "Không tin vào lời hứa lãi cao",
        "Tham khảo chuyên gia tài chính"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DisclaimerBanner />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Các Dạng Lừa Đảo Chi Tiết
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Tìm hiểu sâu về từng loại lừa đảo để bảo vệ bản thân một cách hiệu quả nhất
          </p>
        </div>
      </div>

      {/* Detailed Scam Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {scamDetails.map((scam, index) => (
            <Card key={scam.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-full ${scam.color}`}>
                      <scam.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{scam.title}</CardTitle>
                      <Badge variant="destructive" className="mt-2">
                        {scam.danger}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-300">
                    0{index + 1}
                  </div>
                </div>
                <CardDescription className="text-lg mt-4">
                  {scam.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Techniques */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                      Thủ đoạn thường gặp
                    </h3>
                    <ul className="space-y-3">
                      {scam.techniques.map((technique, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{technique}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Red Flags */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                      Dấu hiệu nhận biết
                    </h3>
                    <ul className="space-y-3">
                      {scam.redFlags.map((flag, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Protection */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Cách phòng tránh
                    </h3>
                    <ul className="space-y-3">
                      {scam.protection.map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Bạn đã sẵn sàng bảo vệ bản thân?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Chia sẻ kiến thức này với gia đình và bạn bè để cùng nhau chống lại lừa đảo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Chia sẻ với người thân
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Tải cẩm nang PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
