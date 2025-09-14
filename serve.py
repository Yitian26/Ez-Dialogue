#!/usr/bin/env python3
"""
简单的本地HTTP服务器，用于运行互动游戏
使用方法：python serve.py
然后访问：http://localhost:8080
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080


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
            print(f"服务器启动成功！")
            print(f"服务目录: {script_dir}")
            print(f"访问地址: http://localhost:{PORT}")

            # 自动打开浏览器
            webbrowser.open(f"http://localhost:{PORT}")

            # 启动服务器
            httpd.serve_forever()

    except KeyboardInterrupt:
        print(f"服务器已停止")
        httpd.server_close()
    except OSError as e:
        print(f"❌ 启动服务器时出错: {e}")
    except Exception as e:
        print(f"❌ 未知错误: {e}")


if __name__ == "__main__":
    main()
