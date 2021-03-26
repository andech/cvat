# Generated by Django 3.1.1 on 2020-11-24 14:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('engine', '0038_manifest'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClowderFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.CharField(max_length=1024)),
                ('data', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='clowder_files', to='engine.data')),
            ],
            options={
                'default_permissions': (),
            },
        ),
    ]