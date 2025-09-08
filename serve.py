#!/usr/bin/env python3
"""
简单的本地HTTP服务器，用于运行互动游戏
使用方法：python serve.py
然后访问：http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000


class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 添加CORS头部以支持本地文件访问
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()


def main():
    # 确保在正确的目录下运行
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print(f"🎮 互动游戏服务器启动成功！")
            print(f"📁 服务目录: {script_dir}")
            print(f"🌐 访问地址: http://localhost:{PORT}")
            print(f"🔥 在浏览器中打开游戏...")
            print(f"⚠️  按 Ctrl+C 停止服务器")
            print("-" * 50)

            # 自动打开浏览器
            webbrowser.open(f"http://localhost:{PORT}")

            # 启动服务器
            httpd.serve_forever()

    except KeyboardInterrupt:
        print(f"\n🛑 服务器已停止")
        httpd.server_close()
    except OSError as e:
        if e.errno == 10048:  # Windows: 端口被占用
            print(f"❌ 端口 {PORT} 被占用，请尝试关闭其他服务或使用不同端口")
            print(f"💡 您也可以修改 serve.py 中的 PORT = {PORT} 为其他值")
        else:
            print(f"❌ 启动服务器时出错: {e}")
    except Exception as e:
        print(f"❌ 未知错误: {e}")


if __name__ == "__main__":
    main()
