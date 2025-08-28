#2025-08-28 11:19:02

try:
    import sys, os, re
    # 先检测expansion秘钥
    with open(__file__, 'r', encoding='utf-8', errors='ignore') as f:
        file_content = f.read()
    if not re.search(r'expansion', file_content):
        print("文件缺少授权秘钥expansion，禁止执行\n文件缺少授权秘钥expansion，禁止执行")
        sys.exit(1)
    # 再检测版权信息是否存在且未被修改
    if not re.search(r'Powered By：expansion', file_content) or not re.search(r'518yun注册地址------https://www.zfyidc.com/aff/LESYKOCO', file_content):
        print("文件可能被恶意篡改,请勿修改文件内容\n文件可能被恶意篡改,请勿修改文件内容")
        sys.exit(1)
except Exception as e:
    # 出错时也退出，防止绕过检查
    sys.exit(1)
