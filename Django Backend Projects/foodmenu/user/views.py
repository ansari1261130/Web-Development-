from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import RegisterForm
from django.contrib.auth.decorators import login_required


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save() 
            username=form.cleaned_data.get('username')
            messages.success(request,f'Welcome { username }, your account is created.')
            return redirect('user:login')
    else:
        form = RegisterForm()
    return render(request, 'user/register.html', {'form': form})


@login_required
def profile_page(request):
    return render(request,'user/profile.html')