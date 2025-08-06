import { Bot, Brain, Eye, Shield, AlertTriangle, CheckCircle, XCircle, Zap, Camera, Mic, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export default function AISafety() {
  const aiApplications = [
    {
      icon: Bot,
      title: "Chatbot & AI Assistant",
      description: "ChatGPT, Gemini, Claude - Trợ lý AI thông minh",
      benefits: [
        "Hỗ trợ học tập và nghiên cứu",
        "Viết và chỉnh sửa văn bản",
        "Giải đáp thắc mắc nhanh chóng",
        "Brainstorming ý tưởng"
      ],
      risks: [
        "Thông tin có thể không chính xác",
        "Thiếu suy nghĩ phản biện",
        "Phụ thuộc quá mức vào AI",
        "Vi phạm bản quyền nếu sao chép"
      ],
      tips: [
        "Luôn kiểm tra thông tin từ AI",
        "Sử dụng AI như công cụ hỗ trợ, không thay thế",
        "Không chia sẻ thông tin nhạy cảm",
        "Ghi nhận nguồn khi sử dụng AI"
      ]
    },
    {
      icon: Camera,
      title: "AI Tạo Hình Ảnh",
      description: "Midjourney, DALL-E, Stable Diffusion",
      benefits: [
        "Tạo artwork và illustration",
        "Design đồ họa nhanh chóng",
        "Concept art và prototype",
        "Giáo dục và giải trí"
      ],
      risks: [
        "Deepfake và hình ảnh giả",
        "Vi phạm bản quyền hình ảnh",
        "Nội dung không phù hợp",
        "Nhầm lẫn thật-giả"
      ],
      tips: [
        "Kiểm tra nguồn gốc hình ảnh",
        "Sử dụng watermark khi cần",
        "Không tạo hình ảnh có hại",
        "Tôn trọng quyền riêng tư người khác"
      ]
    },
    {
      icon: Mic,
      title: "AI Giọng Nói",
      description: "Text-to-speech, voice cloning, audio AI",
      benefits: [
        "Hỗ trợ người khuyết tật",
        "Tạo nội dung audio",
        "Học ngoại ngữ",
        "Chatbot có giọng nói"
      ],
      risks: [
        "Voice deepfake lừa đảo",
        "Giả mạo giọng nói người khác",
        "Tin tức giả với âm thanh",
        "Quấy rối qua giọng nói AI"
      ],
      tips: [
        "Xác thực qua nhiều kênh",
        "Nghi ngờ cuộc gọi lạ",
        "Không tin hoàn toàn vào giọng nói",
        "Báo cáo nếu gặp voice deepfake"
      ]
    },
    {
      icon: Search,
      title: "AI Tìm Kiếm & Phân Tích",
      description: "AI-powered search, data analysis",
      benefits: [
        "Tìm kiếm thông tin chính xác",
        "Phân tích dữ liệu phức tạp",
        "Tóm tắt nội dung dài",
        "Dịch thuật tự động"
      ],
      risks: [
        "Bias trong kết quả tìm kiếm",
        "Thông tin thiên lệch",
        "Filter bubble effect",
        "Mất khả năng tư duy độc lập"
      ],
      tips: [
        "So sánh nhiều nguồn thông tin",
        "Tìm hiểu cách AI hoạt độnng",
        "Đặt câu hỏi phản biện",
        "Giữ thói quen suy nghĩ độc lập"
      ]
    }
  ];

  const deepfakeDetection = [
    {
      type: "Video Deepfake",
      signs: [
        "Chuyển động mắt không tự nhiên",
        "Đồng bộ môi-âm thanh kém",
        "Chất lượng ảnh không đồng đều",
        "Ánh sáng và bóng đổ lạ",
        "Tóc và viền mặt mờ ảo"
      ]
    },
    {
      type: "Audio Deepfake",
      signs: [
        "Giọng nói máy móc, thiếu cảm xúc",
        "Tốc độ nói không nhất quán",
        "Âm thanh nền bất thường",
        "Phát âm một số từ kỳ lạ",
        "Chất lượng âm thanh khác biệt"
      ]
    },
    {
      type: "Text AI-Generated",
      signs: [
        "Văn phong quá hoàn hảo",
        "Thiếu cá tính, cảm xúc cá nhân",
        "Lặp lại cấu trúc câu",
        "Thông tin chung chung, mơ hồ",
        "Không có trải nghiệm cụ thể"
      ]
    }
  ];

  const aiEthics = [
    {
      icon: Shield,
      title: "Sử dụng AI có trách nhiệm",
      principles: [
        "Minh bạch về việc sử dụng AI",
        "Không tạo nội dung có hại",
        "Tôn trọng quyền riêng tư",
        "Không phân biệt đối xử"
      ]
    },
    {
      icon: Eye,
      title: "Nhậnn biết AI-generated content",
      principles: [
        "Luôn kiểm tra nguồn gốc",
        "Tìm hiểu các dấu hiệu AI",
        "Sử dụng công cụ detection",
        "Giáo dục người khác"
      ]
    },
    {
      icon: Brain,
      title: "Giữ tư duy phản biện",
      principles: [
        "Đặt câu hỏi về thông tin AI",
        "So sánh nhiều nguồn",
        "Phát triển critical thinking",
        "Không phụ thuộc hoàn toàn vào AI"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <DisclaimerBanner />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI An Toàn & Thông Minh
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Tìm hiểu cách sử dụng AI một cách an toàn, hiệu quả và có trách nhiệm
          </p>
        </div>
      </div>

      {/* AI Applications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ứng Dụng AI Phổ Biến Hiện Nay
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá lợi ích, rủi ro và cách sử dụng an toàn các công nghệ AI
          </p>
        </div>

        <div className="space-y-12">
          {aiApplications.map((app, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full bg-white shadow-sm">
                    <app.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{app.title}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {app.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-green-700">
                      <CheckCircle className="h-6 w-6 mr-2" />
                      Lợi ích
                    </h3>
                    <ul className="space-y-3">
                      {app.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Risks */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-red-700">
                      <AlertTriangle className="h-6 w-6 mr-2" />
                      Rủi ro
                    </h3>
                    <ul className="space-y-3">
                      {app.risks.map((risk, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Safety Tips */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
                      <Shield className="h-6 w-6 mr-2" />
                      Cách sử dụng an toàn
                    </h3>
                    <ul className="space-y-3">
                      {app.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
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
      </div>

      {/* Deepfake Detection */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nhận Biết Deepfake & Nội Dung AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Các dấu hiệu để phát hiện nội dung được tạo bởi AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deepfakeDetection.map((detection, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <Badge variant="destructive" className="mb-4 mx-auto">
                    {detection.type}
                  </Badge>
                  <CardTitle className="text-xl">Dấu hiệu nhận biết</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {detection.signs.map((sign, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Eye className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* AI Ethics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Đạo Đức AI & Sử Dụng Có Trách Nhiệm
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nguyên tắc đạo đức khi tương tác với công nghệ AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiEthics.map((ethics, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <ethics.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">{ethics.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {ethics.principles.map((principle, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Zap className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm text-left">{principle}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn Sàng Sử Dụng AI An Toàn?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            AI là công cụ mạnh mẽ - hãy sử dụng một cách thông minh và có trách nhiệm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Bot className="h-5 w-5 mr-2" />
              Thực hành với AI
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Shield className="h-5 w-5 mr-2" />
              Tải cẩm nang AI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
