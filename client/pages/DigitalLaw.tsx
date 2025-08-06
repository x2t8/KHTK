import { Scale, Copyright, Shield, FileText, Image, Music, Video, AlertTriangle, CheckCircle, XCircle, Gavel, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export default function DigitalLaw() {
  const copyrightTypes = [
    {
      icon: FileText,
      title: "Văn bản & Tài liệu",
      description: "Bài viết, sách, báo, luận văn, bài nghiên cứu",
      protectionTime: "Trọn đời tác giả + 50 năm",
      examples: ["Blog posts", "E-books", "Báo cáo nghiên cứu", "Nội dung website"],
      violations: [
        "Copy/paste toàn bộ bài viết",
        "Dịch và đăng lại không phép",
        "Sử dụng nội dung không trích dẫn",
        "Bán lại tài liệu có bản quyền"
      ],
      goodPractices: [
        "Trích dẫn nguồn rõ ràng",
        "Xin phép tác giả khi cần",
        "Sử dụng fair use hợp lý",
        "Tạo nội dung gốc của riêng mình"
      ]
    },
    {
      icon: Image,
      title: "Hình ảnh & Đồ họa",
      description: "Ảnh, logo, poster, infographic, artwork",
      protectionTime: "Trọn đời tác giả + 50 năm",
      examples: ["Stock photos", "Logo thương hiệu", "Artwork", "Meme gốc"],
      violations: [
        "Tải và sử dụng ảnh từ Google Images",
        "Crop watermark của tác giả",
        "Sử dụng logo thương hiệu trái phép",
        "Bán ảnh không phải của mình"
      ],
      goodPractices: [
        "Mua ảnh từ stock photo sites",
        "Sử dụng ảnh Creative Commons",
        "Tự chụp ảnh hoặc tạo đồ họa",
        "Xin phép photographer/designer"
      ]
    },
    {
      icon: Music,
      title: "Âm nhạc & Audio",
      description: "Bài hát, nhạc nền, podcast, sound effects",
      protectionTime: "50-70 năm từ khi phát hành",
      examples: ["Bài hát pop", "Nhạc phim", "Jingle quảng cáo", "Sound effects"],
      violations: [
        "Sử dụng nhạc làm nền video YouTube",
        "Stream nhạc có bản quyền trái phép",
        "Remix không xin phép",
        "Sử dụng trong sản phẩm thương mại"
      ],
      goodPractices: [
        "Mua license từ tác giả/label",
        "Sử dụng royalty-free music",
        "Tạo nhạc gốc",
        "Sử dụng Creative Commons music"
      ]
    },
    {
      icon: Video,
      title: "Video & Phim",
      description: "Phim, video clip, stream, animation",
      protectionTime: "50-70 năm từ khi sản xuất",
      examples: ["Phim Hollywood", "Video TikTok", "Stream game", "Animation"],
      violations: [
        "Tải lên phim bản quyền",
        "Sử dụng clip phim trong video",
        "Re-upload video của người khác",
        "Screen recording Netflix, Disney+"
      ],
      goodPractices: [
        "Tạo video gốc 100%",
        "Mua license sử dụng",
        "Fair use cho review/giáo dục",
        "Xin phép tác giả video"
      ]
    }
  ];

  const legalConcepts = [
    {
      icon: Copyright,
      title: "Bản quyền (Copyright)",
      definition: "Quyền độc quyền của tác giả đối với tác phẩm do mình sáng tạo",
      scope: "Tự động có từ khi tác phẩm được tạo ra, không cần đăng ký",
      examples: ["Sách", "Nhạc", "Phim", "Phần mềm", "Website"]
    },
    {
      icon: Shield,
      title: "Sở hữu trí tuệ",
      definition: "Quyền pháp lý đối với các sáng tạo trí tuệ",
      scope: "Bao gồm bản quyền, thương hiệu, bằng sáng chế",
      examples: ["Logo Apple", "Công thức Coca-Cola", "Thuật toán Google"]
    },
    {
      icon: Users,
      title: "Fair Use/Sử dụng hợp lý",
      definition: "Sử dụng tác phẩm có bản quyền mà không cần xin phép",
      scope: "Giáo dục, nghiên cứu, phê bình, tin tức",
      examples: ["Review phim", "Trích dẫn trong luận văn", "Parody"]
    },
    {
      icon: Lock,
      title: "Creative Commons",
      definition: "Hệ thống license cho phép chia sẻ có điều kiện",
      scope: "Các mức độ từ attribution đến no derivatives",
      examples: ["Wikipedia", "Unsplash", "Freepik CC"]
    }
  ];

  const sharingGuidelines = [
    {
      category: "Thông tin cá nhân",
      safe: [
        "Chia sẻ với mục đích tích cực",
        "Có sự đồng ý của chủ thể",
        "Bảo vệ thông tin nhạy cảm",
        "Kiểm soát quyền riêng tư"
      ],
      unsafe: [
        "Doxxing - công khai thông tin cá nhân",
        "Chia sẻ ảnh riêng tư không phép",
        "Leak thông tin liên lạc",
        "Tiết lộ địa chỉ, CMND"
      ]
    },
    {
      category: "Tin tức & Thông tin",
      safe: [
        "Kiểm tra nguồn tin đáng tin cậy",
        "Trích dẫn đầy đủ nguồn gốc",
        "Phân biệt sự kiện và ý kiến",
        "Cập nhật khi có thông tin mới"
      ],
      unsafe: [
        "Chia sẻ tin fake news",
        "Bịa đặt thông tin",
        "Cắt ghép gây hiểu lầm",
        "Chia sẻ tin đồn chưa xác thực"
      ]
    },
    {
      category: "Nội dung thương mại",
      safe: [
        "Khai báo hợp tác thương mại",
        "Tuân thủ luật quảng cáo",
        "Honest review và feedback",
        "Respect thương hiệu"
      ],
      unsafe: [
        "Quảng cáo ẩn không khai báo",
        "Fake review để bôi nhọ",
        "Sử dụng logo thương hiệu trái phép",
        "Pyramid scheme, MLM lừa đảo"
      ]
    }
  ];

  const legalProtection = [
    {
      title: "Cách bảo vệ tác phẩm của bạn",
      icon: Shield,
      steps: [
        "Ghi rõ thông tin tác giả và năm tạo",
        "Sử dụng watermark cho hình ảnh",
        "Đăng ký bản quyền nếu cần thiết",
        "Lưu trữ bằng chứng sáng tạo",
        "Theo dõi việc sử dụng trái phép"
      ]
    },
    {
      title: "Khi bị vi phạm bản quyền",
      icon: Gavel,
      steps: [
        "Thu thập bằng chứng vi phạm",
        "Liên hệ yêu cầu gỡ bỏ",
        "Gửi DMCA takedown notice",
        "Tìm kiếm tư vấn pháp lý",
        "Khởi kiện nếu cần thiết"
      ]
    },
    {
      title: "Tuân thủ khi sử dụng",
      icon: CheckCircle,
      steps: [
        "Luôn kiểm tra license trước khi dùng",
        "Xin phép tác giả khi không chắc",
        "Ghi nhận nguồn đầy đủ",
        "Sử dụng đúng mục đích cho phép",
        "Tôn trọng điều khoản license"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      <DisclaimerBanner />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pháp Luật Số & Bản Quyền
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Hiểu biết về bản quyền, sở hữu trí tuệ và chia sẻ thông tin hợp pháp trong thế giới số
          </p>
        </div>
      </div>

      {/* Legal Concepts Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Khái Niệm Pháp Lý Cơ Bản
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những kiến thức nền tảng về luật sở hữu trí tu�� trong thời đại số
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {legalConcepts.map((concept, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <concept.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{concept.definition}</p>
                <Badge variant="outline" className="mb-3">{concept.scope}</Badge>
                <div className="text-xs text-gray-500">
                  VD: {concept.examples.slice(0, 2).join(", ")}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Copyright Types */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Các Loại Bản Quyền Số
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tìm hiểu chi tiết về từng loại tác phẩm và cách sử dụng hợp pháp
            </p>
          </div>

          <div className="space-y-12">
            {copyrightTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 rounded-full bg-white shadow-sm">
                        <type.icon className="h-8 w-8 text-indigo-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{type.title}</CardTitle>
                        <CardDescription className="text-lg mt-2">
                          {type.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      {type.protectionTime}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Violations */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-red-700">
                        <XCircle className="h-6 w-6 mr-2" />
                        Vi phạm phổ biến
                      </h3>
                      <ul className="space-y-3">
                        {type.violations.map((violation, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{violation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Good Practices */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-green-700">
                        <CheckCircle className="h-6 w-6 mr-2" />
                        Thực hành tốt
                      </h3>
                      <ul className="space-y-3">
                        {type.goodPractices.map((practice, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{practice}</span>
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
      </div>

      {/* Sharing Guidelines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hướng Dẫn Chia Sẻ Thông Tin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cách chia sẻ thông tin một cách hợp pháp và có trách nhiệm
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sharingGuidelines.map((guideline, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{guideline.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Safe Practices */}
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    An toàn & Hợp pháp
                  </h4>
                  <ul className="space-y-2">
                    {guideline.safe.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Unsafe Practices */}
                <div>
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                    <XCircle className="h-5 w-5 mr-2" />
                    Nguy hiểm & Vi phạm
                  </h4>
                  <ul className="space-y-2">
                    {guideline.unsafe.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Legal Protection Guide */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bảo Vệ & Tuân Thủ Pháp Luật
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Hành động cụ thể để bảo vệ tác phẩm và tránh vi phạm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legalProtection.map((protection, index) => (
              <Card key={index} className="bg-white text-gray-900">
                <CardHeader className="text-center">
                  <protection.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{protection.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {protection.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Kiến Thức Pháp Luật = Tự Do Sáng Tạo
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Khi hiểu rõ luật pháp, bạn có thể sáng tạo và chia sẻ một cách tự tin và an toàn
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <Scale className="h-5 w-5 mr-2" />
            Tìm hiểu thêm luật Việt Nam
          </Button>
          <Button size="lg" variant="outline">
            <FileText className="h-5 w-5 mr-2" />
            Tải template license
          </Button>
        </div>
      </div>
    </div>
  );
}
