# Generated by Django 3.1.7 on 2021-04-12 07:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('engine', '0039_auto_training'),
    ]

    operations = [
        migrations.AddField(
            model_name='data',
            name='clowder_api_key',
            field=models.CharField(blank=True, default='', max_length=36),
        ),
        migrations.CreateModel(
            name='ClowderFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clowderid', models.CharField(max_length=1024)),
                ('name', models.CharField(max_length=2048)),
                ('srcdatasetid', models.CharField(max_length=1024)),
                ('data', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='clowder_files', to='engine.data')),
            ],
            options={
                'default_permissions': (),
            },
        ),
    ]