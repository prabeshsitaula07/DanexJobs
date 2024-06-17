from django.urls import path
from api import views
# Create your tests here.
urlpatterns=[
    path('student/', views.StudentList.as_view())
]