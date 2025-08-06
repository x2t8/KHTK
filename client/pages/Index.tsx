import React from "react";
import { AlertTriangle, Shield, Phone, MessageSquare, Mail, CreditCard, Users, BookOpen, ChevronRight, Bot, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import Footer from "@/components/Footer";

export default function Index() {
  const digitalModules = [
    {
      icon: Shield,
      title: "An Toàn Số",
      description: "Nhận biết và phòng tránh lừa đảo, bảo vệ thông tin cá nhân",
      color: "text-red-600 bg-red-100",
      link: "/scam-types"
    },
    {
      icon: Users,
      title: "Đạo Đức Số",
      description: "Quy tắc ứng xử văn minh và giao tiếp tích cực online",
      color: "text-purple-600 bg-purple-100",
      link: "/digital-ethics"
    },
    {
      icon: Bot,
      title: "AI An Toàn",
      description: "Sử dụng AI thông minh, nhận biết deepfake và nội dung giả",
      color: "text-blue-600 bg-blue-100",
      link: "/ai-safety"
    },
    {
      icon: Scale,
      title: "Pháp Luật Số",
      description: "Hiểu biết bản quyền, sở hữu trí tuệ và chia sẻ hợp pháp",
      color: "text-indigo-600 bg-indigo-100",
      link: "/digital-law"
    },
    {
      icon: BookOpen,
      title: "Kỹ Năng Số",
      description: "Digital literacy và công cụ collaboration hiện đại",
      color: "text-green-600 bg-green-100",
      link: "/digital-skills"
    }
  ];

  const protectionTips = [
    "Không cung cấp thông tin cá nhân qua điện thoại",
    "Kiểm tra kỹ nguồn gốc tin nhắn, email",
    "Không click vào link lạ trong tin nhắn",
    "Xác minh thông tin qua kênh chính thức",
    "Tham khảo ý kiến người thân trước khi chuyển tiền"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />
      <DisclaimerBanner />

      {/* Hero Section */}
      <section id="home" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Badge className="bg-red-100 text-red-800 text-sm sm:text-lg px-3 py-1 sm:px-4 sm:py-2">
              <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              CẢNH BÁO LỪA ĐẢO
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Trở Thành
            <span className="text-blue-600 block">Công Dân Số Thông Minh</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Nền tảng giáo dục toàn diện về an toàn số, đạo đức số, AI và kỹ năng công nghệ cho người Việt Nam
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <BookOpen className="h-5 w-5 mr-2" />
              Tìm hiểu ngay
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full sm:w-auto">
              <Phone className="h-5 w-5 mr-2" />
              Báo cáo lừa đảo
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">1.2M+</div>
              <div className="text-sm sm:text-base text-gray-600">Vụ lừa đảo online</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">68%</div>
              <div className="text-sm sm:text-base text-gray-600">Thiếu kỹ năng số cơ bản</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-sm sm:text-base text-gray-600">Vi phạm bản quyền vô ý</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-600">Có thể học và cải thiện</div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Modules */}
      <section id="modules" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Mô-đun Giáo Dục Số Toàn Diện
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Hành trình hoàn chỉnh từ an toàn số đến thành thạo công nghệ
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {digitalModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className={`inline-flex p-3 sm:p-4 rounded-full ${module.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                    <module.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-gray-600 text-sm sm:text-base mb-4">
                    {module.description}
                  </CardDescription>
                  <div className="text-center">
                    <Link to={module.link}>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 w-full sm:w-auto">
                        Khám phá
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Tips */}
      <section id="protection" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                5 Nguyên Tắc Vàng
                <span className="text-green-600 block">Bảo Vệ Bản Thân</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Áp dụng những nguyên tắc đơn giản này để giảm thiểu rủi ro bị lừa đảo
              </p>
              <ul className="space-y-4">
                {protectionTips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 text-lg">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <Shield className="h-20 w-20 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Bảo Vệ 100%</h3>
                  <p className="text-gray-600 mb-6">
                    Kiến thức là vũ khí mạnh nhất chống lại lừa đảo
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Users className="h-4 w-4 mr-2" />
                    Chia sẻ với người thân
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section id="report" className="py-20 bg-red-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Đã Bị Lừa Đảo? Báo Cáo Ngay!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Hãy liên hệ ngay với cơ quan chức năng để được hỗ trợ kịp thời
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Hotline Khẩn Cấp</h3>
                <p className="text-3xl font-bold text-red-600">113</p>
                <p className="text-gray-600 mt-2">Công an toàn quốc</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Báo Cáo Online</h3>
                <p className="text-lg font-semibold text-blue-600">report@antiscam.gov.vn</p>
                <p className="text-gray-600 mt-2">Email chính thức</p>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" variant="secondary">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Gửi báo cáo chi tiết
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
