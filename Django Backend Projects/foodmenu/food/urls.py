from django.urls import path
from food import views

app_name='food'
urlpatterns = [
    path('',views.IndexClassView.as_view(),name='home'),
    path('<int:pk>/',views.FoodDetail.as_view(),name='details'),
    path('add/',views.CreateItem.as_view(),name='create_item'), 
    path('update/<int:id>/',views.update_item,name='update_item'),
    path('remove/<int:id>/',views.remove_item,name='remove_item'),
    
]
 