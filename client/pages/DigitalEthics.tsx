import { Heart, MessageCircle, Users, Eye, Lock, AlertCircle, CheckCircle, XCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export default function DigitalEthics() {
  const ethicsRules = [
    {
      icon: Heart,
      title: "Tôn trọng và lịch sự",
      description: "Đối xử với người khác trên mạng như ngoài đời thực",
      dos: [
        "Sử dụng ngôn ngữ lịch sự, tôn trọng",
        "Lắng nghe ý kiến khác biệt",
        "Thể hiện sự đồng cảm",
        "Ghi nhận đóng góp của người khác"
      ],
      donts: [
        "Sử dụng ngôn từ thô tục, xúc phạm",
        "Tấn công cá nhân thay vì thảo luận ý kiến",
        "Phân biệt đối xử",
        "Bắt nạt hay quấy rối"
      ]
    },
    {
      icon: MessageCircle,
      title: "Giao tiếp có trách nhiệm",
      description: "Chia sẻ thông tin chính xác và có ích cho cộng đồng",
      dos: [
        "Kiểm tra thông tin trước khi chia sẻ",
        "Trích dẫn nguồn tin đáng tin cậy",
        "Thừa nhận khi mắc lỗi",
        "Đóng góp nội dung có giá trị"
      ],
      donts: [
        "Chia sẻ tin giả, tin đồn",
        "Spam hay flood tin nhắn",
        "Clickbait gây hiểu lầm",
        "Đăng nội dung không phù hợp"
      ]
    },
    {
      icon: Users,
      title: "Xây dựng cộng đồng tích cực",
      description: "Tạo ra môi trường online an toàn và tích cực cho mọi người",
      dos: [
        "Khuyến khích thảo luận xây dựng",
        "Hỗ trợ thành viên mới",
        "Báo cáo hành vi không phù hợp",
        "Tham gia các hoạt động tích cực"
      ],
      donts: [
        "Tạo drama hay xung đột",
        "Phân chia cộng đồng",
        "Né tránh trách nhiệm",
        "Làm tổn hại danh tiếng nhóm"
      ]
    },
    {
      icon: Eye,
      title: "Bảo vệ quyền riêng tư",
      description: "Tôn trọng và bảo vệ thông tin cá nhân của bản thân và người khác",
      dos: [
        "Xin phép trước khi chia sẻ ảnh/thông tin của người khác",
        "Sử dụng cài đặt riêng tư phù hợp",
        "Bảo vệ thông tin nhạy cảm",
        "Giáo dục người thân về an toàn"
      ],
      donts: [
        "Đăng thông tin cá nhân nhạy cảm",
        "Theo dõi hay stalking người khác",
        "Chia sẻ ảnh riêng tư không được phép",
        "Xâm phạm tài khoản của người khác"
      ]
    }
  ];

  const communicationTips = [
    {
      icon: CheckCircle,
      title: "Giao tiếp hiệu quả",
      tips: [
        "Rõ ràng và súc tích",
        "Sử dụng emoji phù hợp để thể hiện cảm xúc",
        "Đọc kỹ trước khi trả lời",
        "Tránh viết hoa toàn bộ (có vẻ như đang la hét)"
      ]
    },
    {
      icon: AlertCircle,
      title: "Xử lý xung đột",
      tips: [
        "Bình tĩnh, không phản ứng cảm xúc",
        "Tìm điểm chung thay vì nhấn mạnh khác biệt",
        "Chuyển sang chat riêng nếu cần",
        "Biết khi nào nên dừng cuộc tranh luận"
      ]
    },
    {
      icon: ThumbsUp,
      title: "Xây dựng mối quan hệ",
      tips: [
        "Ghi nhận và khen ngợi đóng góp tích cực",
        "Chia sẻ kinh nghiệm và kiến thức",
        "Hỗ trợ người khác khi có thể",
        "Tham gia thảo luận một cách tích cực"
      ]
    }
  ];

  const digitalWellbeing = [
    {
      title: "Cân bằng thời gian online",
      description: "Sử dụng công nghệ một cách có ý thức",
      icon: "⏰"
    },
    {
      title: "Tránh nghiện mạng xã hội",
      description: "Nhận biết và kiểm soát thói quen sử dụng",
      icon: "📱"
    },
    {
      title: "Bảo vệ sức khỏe tinh thần",
      description: "Tránh so sánh và áp lực từ mạng xã hội",
      icon: "🧠"
    },
    {
      title: "Học hỏi liên tục",
      description: "Sử dụng internet để phát triển bản thân",
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      <DisclaimerBanner />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Đạo Đức Số & Giao Tiếp Online
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Học cách ứng xử văn minh, tôn trọng và xây dựng cộng đồng mạng tích cực
          </p>
        </div>
      </div>

      {/* Ethics Rules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            4 Nguyên Tắc Đạo Đức Số Cơ Bản
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hướng dẫn cụ thể về cách ứng xử đúng đắn trong môi trường số
          </p>
        </div>

        <div className="space-y-12">
          {ethicsRules.map((rule, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full bg-white shadow-sm">
                    <rule.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{rule.title}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {rule.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Should Do */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-green-700">
                      <CheckCircle className="h-6 w-6 mr-2" />
                      NÊN LÀM
                    </h3>
                    <ul className="space-y-3">
                      {rule.dos.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Should Not Do */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-red-700">
                      <XCircle className="h-6 w-6 mr-2" />
                      KHÔNG NÊN LÀM
                    </h3>
                    <ul className="space-y-3">
                      {rule.donts.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Communication Tips */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kỹ Năng Giao Tiếp Online
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những mẹo thực tế để giao tiếp hiệu quả và xây dựng mối quan hệ tích cực
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communicationTips.map((section, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <section.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <ThumbsUp className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Wellbeing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sức Khỏe Số & Phúc Lợi Kỹ Thuật Số
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cách sử dụng công nghệ một cách lành mạnh và cân bằng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalWellbeing.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cùng Xây Dựng Internet Tích Cực!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Mỗi hành động nhỏ của bạn đều góp phần tạo nên một môi trường mạng an toàn và tích cực
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Heart className="h-5 w-5 mr-2" />
              Cam kết thực hành
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Users className="h-5 w-5 mr-2" />
              Chia sẻ với bạn bè
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
