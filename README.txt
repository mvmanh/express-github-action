Đây là project mẫu cho triển khai nodejs express app lên Cloud Run thông qua Github Action 

- Các thực hiện
    
    
    1. Vào console của google cloud, chọn project cần thực hiện, vào service account để tạo một service account mới
        - cấp các quyền như: Cloud Storage, Cloud Build, Cloud Run, ... hoặc cấp Owner, Editor gì đó để cho nó full quyền cũng được.
        - tạo account xong thì click vào overflow menu để tạo key, chọn JSON key để tải về file json chứa thông tin về key, dữ liệu file json này sẽ được dùng để làm biến môi trường cho script.

    2. Vào tập tin .github/workflows/deploy.yml để đọc qua các thông tin cần thiết, trong đó 
        - thay đổi giá trị phù hợp cho các biến môi trường ở PROJECT_ID, SERVICE, REGION
        - secrets.GCP_CREDENTIALS là một secrets cần được thiết lập trong phần Settings > Secret của repository trên github. GCP_CREDENTIALS chứa giá trị của tập tin json vừa tải về ở bước trước 
        
    3. Tạo repo mới trên github nếu chưa có
        - Push toàn bộ source code lên github repo, rồi truy cập tab Action trên giao diện web của github để xem kết quả 
        - Source code sẽ được đẩy lên Google Cloud Build để build ra image lưu ở Google Cloud Registry và sau đó sẽ được deploy ở Cloud Run 
        - Mặc định service sau khi được deploy sẽ bị ở chế độ private, ta cần vào quản lý service, click vào chi tiết và chọn unauthenticated 

    4. Mỗi lần thay đổi source code và commit thì source code sẽ tự động được deploy lên cloud run một cách tự động